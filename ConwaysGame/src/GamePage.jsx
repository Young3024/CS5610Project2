import React, { useState, useEffect } from 'react';
import {Link }from 'react-router-dom';
import Grid from './Grid';
import Controls from './Controls';
import './App.css';

const GamePage = () => {
  const [gridSize, setGridSize] = useState({ height: 20, width: 20 });
  const [livingCells, setLivingCells] = useState([]);
  const [iteration, setIteration] = useState(Array.from({ length: gridSize.height }, () => Array(gridSize.width).fill(0)));
  const [isHeatmapActive, setIsHeatmapActive] = useState(false);

  useEffect(() => {
    initializeGrid();
  }, [gridSize]);

  const initializeGrid = () => {
    const newLivingCells = [];
    const newIteration = [];
    for (let i = 0; i < gridSize.height; i++) {
      newIteration.push([Array.from({ length: gridSize.width }).fill(0)]); // Initialize inner array
      for (let j = 0; j < gridSize.width; j++) {
        if (Math.random() < 0.05) { // 5% chance of being alive
          newLivingCells.push({ x: i, y: j });
          newIteration[i][j] = 0;
        } else {
          newIteration[i][j] = 1;
        }
      }
  }
    setLivingCells(newLivingCells);
    setIteration(newIteration);
  };

  const toggleCellState = (x, y) => {
    const newIteration = [...iteration];
    const cellIndex = livingCells.findIndex(cell => cell.x === x && cell.y === y);
    if (cellIndex === -1) {
      setLivingCells([...livingCells, { x, y }]);
      newIteration[x][y] = 0;
    } else {
      setLivingCells(livingCells.filter(cell => !(cell.x === x && cell.y === y)));
      newIteration[x][y] = 1;
    }
    setIteration(newIteration);
  };

  const resetGrid = () => {
    initializeGrid();
  };

  const progressSimulation = () => {
    const newLivingCells = [];
    const newIteration = [...iteration];
    // Function to count live neighbors of a cell
    const countLiveNeighbors = (x, y) => {
      let liveNeighbors = 0;
      for (let i = x - 1; i <= x + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
          if ((i !== x || j !== y) && livingCells.some(cell => cell.x === i && cell.y === j)) {
            liveNeighbors++;
          }
        }
      }
      return liveNeighbors;
    };
  
    // Function to check if a cell should be alive in the next generation
    const shouldCellLive = (x, y) => {
      const liveNeighbors = countLiveNeighbors(x, y);
      const isAlive = livingCells.some(cell => cell.x === x && cell.y === y);
      if (isAlive) {
        return liveNeighbors === 2 || liveNeighbors === 3;
      } else {
        return liveNeighbors === 3;
      }
    };
  
    // Iterate through each cell and determine its state in the next generation
    for (let i = 0; i < gridSize.height; i++) {
      for (let j = 0; j < gridSize.width; j++) {
        if (shouldCellLive(i, j)) {
          newLivingCells.push({ x: i, y: j });
          newIteration[i][j] = 0;
        }else{
          newIteration[i][j] +=1;
          console.log(newIteration[i][j]);
        }
      
      }
    }
  
    // Update living cells and iteration count
    setLivingCells(newLivingCells);
    setIteration(newIteration);
  };
  
  const toggleHeatmap = () => {
    setIsHeatmapActive(prevState => !prevState);
  };
  
  return (
    <div className="app">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/game">Game</Link></li>
          <li><Link to="/credits">Credits</Link></li>
        </ul>
      </nav>
      <h1>Conway's Game of Life</h1>
      <button onClick={toggleHeatmap}>
        {isHeatmapActive ? 'Disable Heatmap' : 'Enable Heatmap'}
      </button>
      
        <Grid
          height={gridSize.height}
          width={gridSize.width}
          livingCells={livingCells}
          toggleCellState={toggleCellState}
          iteration={iteration}
          isHeatmapActive={isHeatmapActive}
        />
        <Controls
          gridSize={gridSize}
          setGridSize={setGridSize}
          resetGrid={resetGrid}
          progressSimulation={progressSimulation}
          livingCellsCount={livingCells.length}
        />
      
    </div>
  );
};

export default GamePage;
