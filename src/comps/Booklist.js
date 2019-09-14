import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark } = this.context;
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
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
