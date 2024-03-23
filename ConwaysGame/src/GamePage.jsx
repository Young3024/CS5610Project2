import React, { useState } from 'react';
import Grid from './Grid';

const GamePage = () => {
  const [gridSize, setGridSize] = useState({ height: 20, width: 20 });

  const handleGridSizeChange = (newSize) => {
    setGridSize(newSize);
  }

  return (
    <div className="game">
      <h1>Conway's Game of Life</h1>
      <Grid size={gridSize} />
    </div>
  );
}

export default GamePage;
