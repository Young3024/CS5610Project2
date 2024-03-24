import React from 'react';

const Grid = ({ height, width, livingCells, toggleCellState }) => {
  return (
    <div className="grid">
      {Array.from({ length: height }, (_, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array.from({ length: width }, (_, colIndex) => {
            const isAlive = livingCells.some(cell => cell.x === rowIndex && cell.y === colIndex);
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`cell ${isAlive ? 'alive' : ''}`}
                onClick={() => toggleCellState(rowIndex, colIndex)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
