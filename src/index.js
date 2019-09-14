import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';
import Navbar from './comps/Navbar';
import BookList from './comps/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './comps/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
