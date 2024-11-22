import React, { useEffect } from 'react';
import './styles.css';

const BookCatalog = ({ books }) => {
  useEffect(() => {
    const bookList = document.getElementById("book-list");
    books.forEach(book => createBookElement(book, bookList));
  }, [books]);

  const filterBooks = (category) => {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ""; 

    books
      .filter(book => category === "All" || book.category === category)
      .forEach(book => createBookElement(book, bookList));
  };

  const addBook = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;
    const description = event.target.description.value;

    const newBook = { title, author, category, description };

    const bookList = document.getElementById("book-list");
    createBookElement(newBook, bookList);

    event.target.reset();
  };

  const createBookElement = (book, container) => {
    const bookItem = document.createElement("div");
    bookItem.className = "book-item";
    bookItem.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Category:</strong> ${book.category}</p>
      <p>${book.description}</p>
    `;
    container.appendChild(bookItem);
  };

  return (
    <div id="book-catalog">
      <h1>Book Catalog</h1>

      <form onSubmit={addBook}>
        <input name="title" placeholder="Title" required />
        <input name="author" placeholder="Author" required />
        <select name="category" required>
          <option value="" disabled selected>Choose a category</option>
          <option>Fiction</option>
          <option>Non-Fiction</option>
          <option>Science</option>
          <option>Fantasy</option>
        </select>
        <textarea name="description" placeholder="Description" required></textarea>
        <button type="submit">Add Book</button>
      </form>

      <select id="filter-select" onChange={(e) => filterBooks(e.target.value)}>
        <option value="All">All</option>
        <option>Fiction</option>
        <option>Non-Fiction</option>
        <option>Science</option>
        <option>Fantasy</option>
      </select>

      <div id="book-list"></div>
    </div>
  );
};

export default BookCatalog;
