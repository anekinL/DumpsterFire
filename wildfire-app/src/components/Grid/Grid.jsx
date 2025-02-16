// src/components/Grid/Grid.jsx
import React, { useState, useEffect } from 'react';
import Square from '../Square/Square';
import './Grid.css';

const Grid = ({ rows, columns }) => {
  // Generate grid data dynamically
  const [gridData, setGridData] = useState(() => {
    const initialData = [];
    for (let i = 0; i < rows * columns; i++) {
      initialData.push({
        id: i + 1,
        info: `This is Info for ${i + 1}\nThis is a new line`,
        onFire: i === 0, // Set the first square on fire
        checked: false,
      });
    }
    return initialData;
  });

  useEffect(() => {
    const spreadDelay = Math.random() * 1000 + 1000; // Random delay between 1s and 3s
    const interval = setInterval(() => {
      setGridData((prevData) => {
        const newData = [...prevData];
        for (let i = 0; i < newData.length; i++) {
          if (newData[i].onFire && !newData[i].checked) {
            newData[i].checked = true;

            // Spread fire to adjacent squares
            const spreadFire = (index) => {
              if (index >= 0 && index < newData.length && !newData[index].onFire) {
                newData[index].onFire = Math.random() > 0.45;
              }
            };

            // Right
            if ((i + 1) % columns !== 0) setTimeout(() => {spreadFire(i + 1);}, spreadDelay);
            // Left
            if (i % columns !== 0) setTimeout(() => {spreadFire(i - 1);}, spreadDelay);
            // Down
            setTimeout(() => {spreadFire(i + columns);}, spreadDelay);
            // Up
            setTimeout(() => {spreadFire(i - columns);}, spreadDelay);
          }
        }
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [columns]);

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 100px)`,
        gridTemplateRows: `repeat(${rows}, 100px)`,
      }}
    >
      {gridData.map((square) => (
        <Square key={square.id} {...square} />
      ))}
    </div>
  );
};

export default Grid;