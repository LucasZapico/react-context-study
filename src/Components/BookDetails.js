import React, { useContext } from 'react';
import { BookContext } from '../Context/BookContext';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
      <hr width="98%" />
    </li>
  );
};

export default BookDetails;
