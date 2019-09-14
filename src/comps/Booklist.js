import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.font, background: theme.bg }}
    >
      <ul>
        {books.map(book => {
          return (
            <li
              key={book.id}
              style={{ background: theme.ui, color: theme.font }}
            >
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
