import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetailsPage.css'; // Import CSS file
import VideoBackground from './VideoBackground';

function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBookDetails(id);
  }, [id]);

  const fetchBookDetails = async (id) => {
    try {
      const response = await fetch(`https://softwium.com/api/books/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch book details');
      }
      const data = await response.json();
      setBook(data);
    } catch (error) {
      console.error('Error fetching book:', error);
    }
  };

  return (
    <div className="book-details-page">
      <VideoBackground videoPath="/video.mp4" />
      <div className="book-details-container">
        <h2>Book Details</h2>
        {book && (
          <div className="book-details">
            <p><strong>Title:</strong> {book.title}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>PageCount:</strong> {book.pageCount}</p>
            <p><strong>Authors:</strong> {book.authors.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookDetailsPage;
