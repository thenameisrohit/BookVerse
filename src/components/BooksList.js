import React from 'react';
import './BookList.css'; // Make sure the path is correct

function BooksList() {
  // Sample book information
  const book = {
    title: "BookVerse"
  };

  const handleButtonClick = () => {
    // Redirect to a specific URL when the button is clicked
    window.location.href = "/Books";
  };

  return (
    // Uncomment the next line if VideoBackground component is to be used
    // <VideoBackground>
    <div className="books-list-container">
      <div className="books-list">
        <div className="book-info">
          <h2>{book.title}</h2>
          <p>
            <span className="large-b">B</span>ooks are essential for expanding knowledge and fostering imagination,
            providing a gateway to different cultures and perspectives.
            They enhance cognitive skills and critical thinking, promoting empathy and understanding.
            Books also serve as a source of entertainment and relaxation, offering an escape from daily life.
            Lastly, they preserve history, ideas, and stories, ensuring the transmission of wisdom across generations.
          </p>
          <button className="book-list-button" onClick={handleButtonClick}>BookList</button>
        </div>
      </div>
    </div>
    // </VideoBackground>
  );
}

export default BooksList;
