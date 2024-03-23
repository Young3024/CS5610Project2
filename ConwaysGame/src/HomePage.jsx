import React from 'react';

const HomePage = () => {
  return (
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
  );
}

export default HomePage;
