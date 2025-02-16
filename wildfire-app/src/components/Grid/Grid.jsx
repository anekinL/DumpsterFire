// src/components/Grid/Grid.jsx
import React, { useState, useEffect } from 'react';
import Square from '../Square/Square';
import './Grid.css';

const Grid = ({ rows, columns }) => {
  // Generate grid data dynamically
  const gridData = [];
  for (let i = 0; i <= rows * columns; i++) {
        if (i == 1) {
            gridData.push({
                id: i+1,
                info: `This is Info for ${i+1} \nThis is a new line`,
                onFire: true,
                checked: false,
            });
        } else {
            gridData.push({
            id: i+1,
            info: `This is Info for ${i+1} \nThis is a new line`,
            onFire: false,
            checked: false,
            });
        }
  }

  useEffect(() => {
      const interval = setInterval(() => {
        //console.log("interval");
        for (let i = 0; i<rows*columns; i++) {
            if (gridData[i].onFire && !gridData[i].checked) {
                gridData[i].checked = true;
                console.log(i+1);
                if (i+1%rows != 0) {
                    const spread1 = Math.random();
                    //console.log(spread1);
                    if (spread1 > 0.5 && !gridData[i+1].onFire) {
                        gridData[i+1].onFire = true;
                    }
                }
                if (i%rows != 0) {
                    const spread2 = Math.random();
                    if (spread2 > 0.5 && !gridData[i-1].onFire) {
                        gridData[i-1].onFire = true;
                    }
                }
                
                const spread3 = Math.random();
                const spread4 = Math.random();
                if (spread3 > 0.5 && i < 56) {
                    if (!gridData[i+rows].onFire) {
                        gridData[i+rows].onFire = true;
                    }
                }
                console.log("i-rows = " + i-rows);
                if (spread4 > 0.5 && i > 8) {
                    if (!gridData[i-rows].onFire) {
                        //console.log("in");
                        gridData[i-rows].onFire = true;
                    }
                }
            }
        }
    }, 1000); 
    
        return () => clearInterval(interval);
    }, []);

  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 100px)`, // Set columns dynamically
        gridTemplateRows: `repeat(${rows}, 100px)`,       // Set rows dynamically
      }}
    >
      {gridData.map((square) => (
        <Square key={square.id} id={square.id} sid={square.id} info={square.info} onFire={square.onFire}/>
        
      ))}
    </div>
  );
};

export default Grid;