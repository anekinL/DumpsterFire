import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './CsvParser.css'

const CsvParser = ({ setFilteredData }) => {
  const [csvData, setCsvData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [monthFilter, setMonthFilter] = useState("");

  useEffect(() => {
    fetch('../../merged.csv')
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          complete: (result) => {
            console.log('Parsed CSV result:', result);
            setCsvData(result.data);
            setFilteredData(result.data); // Update global state immediately
          },
          header: true,
        });
      })
      .catch((error) => console.error('Error fetching CSV:', error));
  }, [setFilteredData]);

  useEffect(() => {
    if (monthFilter) {
      const filtered = csvData.filter(row => row.Month && row.Month.toLowerCase().includes(monthFilter.toLowerCase()));
      setFilteredData(filtered);
    } else {
      setFilteredData(csvData);
    }
  }, [monthFilter, csvData, setFilteredData]);

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setMonthFilter(inputValue);
    }
  };

  return (
    <div className="csv-parser-container">
      <h2>Year-Month Conditions</h2>
      <input
        type="text"
        className="csv-input"
        placeholder="Enter month (e.g., 10-Feb)"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default CsvParser;

