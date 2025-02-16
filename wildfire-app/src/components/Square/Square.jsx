import React, { useState, useEffect } from 'react';
import './Square.css';

const Square = ({ sid, info, onFire, checked}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOnFire, setOnFire] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

//checks the fire var every second
  useEffect(() => {
    const element = document.getElementById(sid);
    const interval = setInterval(() => {
    
        if (onFire) {
            console.log(element);
            setOnFire(true);
            //element.style.backgroundColor = "red";
        }; // Toggle fire state every second
      }, 1000);
  
      return () => clearInterval(interval);
  }, []);


  let className = 'square';
  if (isHovered) {
    className += ' hovered';
  }


  let content;
  if (isHovered) {
    content = info;
  } else {
    content = "";
  }


return (
    <div 
        className="square-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >

        <div className={`square ${isOnFire ? 'on-fire' : 'normal'}` }>
            {sid}
        </div>
    
        {isHovered && (
            <div className="square-tooltip">
                <div className="tooltip-content">
                    {content}
                </div>
            </div>
        )}
    </div>
    );
};

export default Square;