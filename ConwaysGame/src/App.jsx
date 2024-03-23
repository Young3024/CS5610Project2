import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  return (
    
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/game">Game</Link></li>
            <li><Link to="/credits">Credits</Link></li>
          </ul>
        </nav>
        {/* <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/game" component={GamePage} />
          <Route path="/credits" component={CreditPage} />
        </Routes> */}
      </div>
    
  );
}

export default App;
