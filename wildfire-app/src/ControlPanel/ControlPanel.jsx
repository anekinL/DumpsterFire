//src/ControlPanel/ControlPanel.jsx
import React from 'react';
import './ControlPanel.css'; // Import the CSS file

const ControlPanel = () => {
  return (
    <div className="control-panel">
      <h2 className="control-panel-title">Simulation Controls</h2>
      <div className="slider-container">
        <label className="slider-label">Timeline</label>
        <input type="range" min="0" max="100" className="timeline-slider" />
      </div>
      {/* You can add more controls below */}
    </div>
  );
};

export default ControlPanel;