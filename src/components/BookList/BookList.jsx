import React from 'react';
import BookShelf from '../BookShelf/BookShelf';

const DUMMY_DATA_CurrentlyReading = [
  {
    id: '12',
    title: 'To Kill a Mockingbird',
    imageLinks: {
      thumbnail:
        'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api',
    },
    authors: 'Orson Scott Card',
  },
];
const DUMMY_DATA_WantToRead = [
  {
    id: '123',
    title: '1776',
    imageLinks: {
      thumbnail:
        'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api',
    },
    authors: 'David McCullough',
  },
];
const DUMMY_DATA_Read = [
  {
    id: '1234',
    title: 'The Hobbit',
    imageLinks: {
      thumbnail:
        'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api',
    },
    authors: 'J.R.R. Tolkien',
  },
];

const BookList = ({ toggleShowSearchButton }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          <BookShelf
            status={DUMMY_DATA_CurrentlyReading}
            title={'Currently Reading'}
          />
          <BookShelf status={DUMMY_DATA_WantToRead} title={'Want to Read'} />
          <BookShelf status={DUMMY_DATA_Read} title={'Read'} />
        </div>
      </div>
      <div className="open-search">
        <a href="#" onClick={() => toggleShowSearchButton(!false)}>
          Add a book
        </a>
      </div>
    </div>
  );
};

export default BookList;