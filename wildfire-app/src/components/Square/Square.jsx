import React, { useState } from 'react';
import './Square.css';

const Square = ({ id, info }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Dynamic class name using if-else
  let className = 'square';
  if (isHovered) {
    className += ' hovered';
  }

  // Conditional content using if-else
  let content;
  if (isHovered) {
    content = info;
  } else {
    content = id;
  }

  return (
    <div
      className={className} // Use the dynamically generated class name
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content} {/* Use the dynamically generated content */}
    </div>
  );
};

export default Square;