// src/components/Grid/Grid.jsx
import React from 'react';
import Square from '../Square/Square';
import './Grid.css';

const Grid = ({ rows, columns }) => {
  // Generate grid data dynamically
  const gridData = [];
  for (let i = 1; i <= rows * columns; i++) {
    gridData.push({
      id: i,
      info: `This is Info for ${i}`,
    });
  }

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 100px)`, // Set columns dynamically
        gridTemplateRows: `repeat(${rows}, 100px)`,       // Set rows dynamically
      }}
    >
      {gridData.map((square) => (
        <Square key={square.id} id={square.id} info={square.info} />
      ))}
    </div>
  );
};

export default Grid;