import React from 'react';

const Grid = ({ height, width, livingCells, toggleCellState, iteration, isHeatmapActive }) => {
  const getColorForCell = (age) => {
    // Define color gradient (replace these colors with your chosen gradient)
    const colorGradient = ['#000000','#800080','#FF0000','#FFFF00','#fff']; // Example gradient from white to red
    
    let colorIndex;
    if (age === 0) colorIndex = 0;
    else if (age>0&&age<=4) colorIndex = 1;
    else if (age>4&&age<=6) colorIndex = 2;
    else if (age>6&&age<10) colorIndex = 3;
    else if (age>=10) colorIndex = 4;

    return colorGradient[colorIndex];
  };

  return (
    <div className="grid">
      {Array.from({ length: height }, (_, rowIndex) => (
        <div key={rowIndex}>
          {Array.from({ length: width }, (_, colIndex) => {
            
            let cellColor;
            if (isHeatmapActive) {
              const cellAge = iteration[rowIndex][colIndex];
              cellColor = getColorForCell(cellAge);
            } else {
              const isAlive = livingCells.some(cell => cell.x === rowIndex && cell.y === colIndex);
              cellColor = isAlive ? 'black' : 'white'; // Default colors for alive and dead cells
            }
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="cell"
                //className={`cell ${isAlive ? 'alive' : ''}`}
                style={{ backgroundColor: cellColor }}
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
