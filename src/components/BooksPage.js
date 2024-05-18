import React, { useEffect, useState } from 'react';
import './BooksPage.css'; // Import CSS file


function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://softwium.com/api/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
    <div className="books-container">
      <h2>BooksList</h2>
      <ul className="book-list">
        {books.map(book => (
          <li key={book.id} className="book-item">
            <span className="book-number">{book.id}</span>
            <a href={`/books/${book.id}`} className="book-link">{book.title}</a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default BooksPage;
