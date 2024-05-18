import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BooksPage from './components/BooksPage';
import BookDetailsPage from './components/BookDetailsPage';
import BooksList from './components/BooksList';
import './App.css'; // Import CSS file
import VideoBackground from './components/VideoBackground';

function App() {
  return (
    <div className="App">
      {<div className="background-image"></div> }
     { <VideoBackground/> }

      <Router>
        <Navbar />
        <Routes>
          <Route path="/books/:id" element={<BookDetailsPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/" element={<BooksList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
