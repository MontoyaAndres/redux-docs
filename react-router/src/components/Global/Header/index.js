import React from 'react'; 
import { Link } from 'react-router-dom';

export default () => (
  <header>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </header>
);
