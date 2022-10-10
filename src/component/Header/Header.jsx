import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
        <div className='icon'>
            <h3>Jitun By Quiz</h3>
        </div>
        <div>
            <Link to='/'>Home</Link>
          <Link to="/topics">Topics</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    );
};

export default Header;