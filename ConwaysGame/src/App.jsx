import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  return (
    
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/game">Game</Link></li>
            <li><Link to="/credits">Credits</Link></li>
          </ul>
        </nav>

        <div className="home">
          <h1>Welcome to Conway's Game of Life</h1>
          <p>Rules:</p>
          <ul>
            <li>A living cell with less than two living neighbors dies.</li>
            <li>A living cell with two or three live neighbors lives.</li>
            <li>A living cell with more than three live neighbors dies.</li>
            <li>A dead cell with exactly three live neighbors becomes a live cell.</li>
          </ul>
        </div>
        {/* <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/game" component={GamePage} />
          <Route path="/credits" component={CreditPage} />
        </Routes> */}
      </div>
    
  );
}

export default App;
