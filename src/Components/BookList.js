import React, { useContext } from 'react';
import { BookContext } from '../Context/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty book-list">No Books to read. Go out side!</div>
  );
};

export default BookList;
