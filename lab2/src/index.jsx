import React from 'react';
import ReactDOM from 'react-dom';
import BookCatalog from './book-catalog';
import './styles.css';

const books = [
  { title: "Book 1", author: "Author 1", category: "Fiction", description: "Description 1" },
  { title: "Book 2", author: "Author 2", category: "Non-Fiction", description: "Description 2" },
];

ReactDOM.render(<BookCatalog books={books} />, document.getElementById('root'));
