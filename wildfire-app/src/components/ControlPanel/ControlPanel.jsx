import React, { useState } from 'react';
import './ControlPanel.css'; // Import the CSS file

const ControlPanel = () => {
  const [isVisible, setIsVisible] = useState(true); // State to control visibility

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the visibility state
  };

  return (
    <div>
      {/* Toggle button to minimize/maximize the control panel */}
      <button onClick={toggleVisibility} className="toggle-button">
        {isVisible ? 'Minimize' : 'Maximize'}
      </button>

      {/* Control Panel Box */}
      {isVisible && (
        <div className="control-panel-box">
          <h2 className="control-panel-title">Settings</h2>

          {/* Timeline Slider */}
          <div className="slider-container">
            <label className="slider-label">Timeline</label>
            <input type="range" min="0" max="100" className="timeline-slider" />
            <p className="slider-title">Adjust the wildfire timeline</p>
          </div>

          {/* Temperature Slider */}
          <div className="slider-container">
            <label className="slider-label">Temperature (°C)</label>
            <input type="range" min="-20" max="50" className="temperature-slider" />
            <p className="slider-title">Adjust the temperature</p>
          </div>

          {/* Humidity Slider */}
          <div className="slider-container">
            <label className="slider-label">Humidity (%)</label>
            <input type="range" min="0" max="100" className="humidity-slider" />
            <p className="slider-title">Adjust the humidity</p>
          </div>

          {/* Wind Speed Slider */}
          <div className="slider-container">
            <label className="slider-label">Wind Speed (km/h)</label>
            <input type="range" min="0" max="100" className="wind-speed-slider" />
            <p className="slider-title">Adjust the wind speed</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ControlPanel;