import React from 'react';
import {Link }from 'react-router-dom';

const CreditsPage = () => {
  return (
    <div className="credits">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/game">Game</Link></li>
          <li><Link to="/credits">Credits</Link></li>
        </ul>
      </nav>
      
      <h1>Credits</h1>
      <p>Developed by Yiyang Cao</p>
      <p>Github repo: <a href="https://github.com/Young3024/CS5610Project2">[link]</a></p>
    </div>
  );
}

export default CreditsPage;
