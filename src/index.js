import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';
import Navbar from './comps/Navbar';
import BookList from './comps/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './comps/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
