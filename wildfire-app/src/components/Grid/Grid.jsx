// src/components/Grid/Grid.jsx
import React, { useState, useEffect } from 'react';
import Square from '../Square/Square';
import './Grid.css';

const Grid = ({ rows, columns, filteredData }) => {
  // Initialize grid data from filteredData
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    if (filteredData.length > 0) {
      const newGridData = filteredData.slice(0, rows * columns).map((data, i) => {
        let fireRisk = parseFloat(data.WFRN) || 0; // Ensure it's a number
        
        if (fireRisk === 0) {
          fireRisk = Math.random() * 0.6; // Assign a random value between 0 and 1 if 0
        }

        return {
          id: i + 1,
          info: `id: ${i + 1} \n 
                 Humidity: ${data.Humidity || '_'} \n
                 WindSpeed: ${data.Wind_Speed || '_'} \n
                 Temperature: ${data.Temperature || '_'} \n
                 Risk Factor: ${fireRisk.toFixed(2)}`,
          onFire: i === 27,
          checked: false,
          fireRisk: fireRisk,
        };
      });

      setGridData(newGridData);
    }
  }, [filteredData, rows, columns]);

  useEffect(() => {
    const spreadDelay = Math.random() * 1000 + 1000; // Random delay between 1s and 3s
    const interval = setInterval(() => {
      setGridData((prevData) => {
        const newData = [...prevData];
        for (let i = 0; i < newData.length; i++) {
          if (newData[i].onFire && !newData[i].checked) {
            newData[i].checked = true;

            // Spread fire to adjacent squares
            const fireChance = Math.random() * (0.6 - 0.4) + 0.4;
            console.log("Firechance:", fireChance);

            const spreadFire = (index) => {
              if (index >= 0 && index < newData.length && !newData[index].onFire) {
                newData[index].onFire = newData[index].fireRisk >= fireChance;
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
