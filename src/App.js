import './App.scss';
import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import BookList from './components/BookList/BookList';
import { getAll } from './BooksAPI';

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [isCurrentlyReading, setIsCurrentlyReading] = useState([
    {
      id: '12',
      title: 'To Kill a Mockingbird',
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
      },
      authors: 'Orson Scott Card',
    },
  ]);
  const [isWantToRead, setIsWantToRead] = useState([
    {
      id: '123',
      title: '1776',
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
      },
      authors: 'David McCullough',
    },
  ]);
  const [isRead, setIsRead] = useState([
    {
      id: '1234',
      title: 'The Hobbit',
      imageLinks: {
        thumbnail:
          'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api',
      },
      authors: 'J.R.R. Tolkien',
    },
  ]);
  useEffect(() => {
    getAll().then(data => {
      let allBooks = [];
      for (const key in data) {
        const book = {
          id: data[key].id,
          title: data[key].title,
          thumbnail: data[key].imageLinks.thumbnail,
          authors: data[key].authors,
        };
        console.log(allBooks);
        console.log(book);
      }
      allBooks.push(data);
    });
  });

  const searchHandler = close => {
    setShowSearchpage(close);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <Search toggleShowSearchButton={searchHandler} />
      ) : (
        <BookList
          toggleShowSearchButton={searchHandler}
          isCurrentlyReading={isCurrentlyReading}
          setIsCurrentlyReading={setIsCurrentlyReading}
          isWantToRead={isWantToRead}
          setIsWantToRead={setIsWantToRead}
          isRead={isRead}
          setIsRead={setIsRead}
        />
      )}
    </div>
  );
}

export default App;
