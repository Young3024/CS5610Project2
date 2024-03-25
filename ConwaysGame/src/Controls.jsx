import React, { useState, useEffect } from 'react';

const Controls = ({ gridSize, setGridSize, resetGrid, progressSimulation, livingCellsCount }) => {
  const [newHeight, setNewHeight] = useState(gridSize.height);
  const [newWidth, setNewWidth] = useState(gridSize.width);
  const [error, setError] = useState('');
  const [isAutoplayOn, setIsAutoplayOn] = useState(false);

  const handleAutoplayToggle = () => {
    setIsAutoplayOn(prevState => !prevState); // Toggle autoplay state
  };

  useEffect(() => {
    let autoplayInterval;

    if (isAutoplayOn) {
      autoplayInterval = setInterval(progressSimulation, 100); // Progress simulation every 100 milliseconds
    } else {
      clearInterval(autoplayInterval); // Clear interval when autoplay is turned off
    }

    return () => clearInterval(autoplayInterval); // Clean up interval on component unmount
  }, [isAutoplayOn, progressSimulation]);

  const handleHeightChange = event => {
    const height = parseInt(event.target.value);
    setNewHeight(height);
  };

  const handleWidthChange = event => {
    const width = parseInt(event.target.value);
    setNewWidth(width);
  };

  const handleSubmit = () => {
    if (newHeight >= 3 && newHeight <= 40 && newWidth >= 3 && newWidth <= 40) {
      setGridSize({ height: newHeight, width: newWidth });
      resetGrid();
      setError('');
    } else {
      setError('Please enter values between 3 and 40 for both height and width.');
    }
  };

  return (
    <div className="controls">
      <div className="input-group">
        <label>Height:</label>
        <input
          type="number"
          value={newHeight}
          onChange={handleHeightChange}
          min={3}
          max={40}
        />
      </div>
      <div className="input-group">
        <label>Width:</label>
        <input
          type="number"
          value={newWidth}
          onChange={handleWidthChange}
          min={3}
          max={40}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={resetGrid}>Reset Grid</button>
      <button onClick={progressSimulation}>Progress Simulation</button>
      <button onClick={handleAutoplayToggle}>
        {isAutoplayOn ? 'Stop Autoplay' : 'Start Autoplay'}
      </button>
      <div className="living-cells">Living Cells: {livingCellsCount}</div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Controls;
