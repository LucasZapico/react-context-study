import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.font, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui, color: theme.font }}>
          The way of kings
        </li>
        <li style={{ background: theme.ui, color: theme.font }}>
          The name of the wind
        </li>
        <li style={{ background: theme.ui, color: theme.font }}>
          The final empire
        </li>
      </ul>
    </div>
  );
};

export default BookList;
