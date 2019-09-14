import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';
import BookContextProvider from './Context/BookContext';
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';
import NewBookForm from './Components/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
