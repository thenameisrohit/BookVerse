import React from 'react';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <i className="fas fa-home"></i> Home
          </a>
        </li>
        <li>
          <a href="/books">
            <i className="fas fa-book-open"></i> Books List
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
