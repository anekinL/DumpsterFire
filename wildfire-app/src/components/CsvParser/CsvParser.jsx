import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const CsvParser = () => {
  const [csvData, setCsvData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
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
          },
          header: true,
        });
      })
      .catch((error) => console.error('Error fetching CSV:', error));
  }, []);

  useEffect(() => {
    if (monthFilter) {
      const filtered = csvData.filter(row => row.Month && row.Month.toLowerCase().includes(monthFilter.toLowerCase()));
      console.log(filtered)
      console.log(filtered.length)
      setFilteredData(filtered);
    } else {
      setFilteredData(csvData);
    }
  }, [monthFilter, csvData]);

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setMonthFilter(inputValue); // Apply filter when Enter is pressed
    }
  };

  return (
    <div>
      <h2>CSV Data Filtered by Month</h2>
      <input
        type="text"
        placeholder="Enter month (e.g., 10-Feb)"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown} // Trigger on Enter
      />
      <pre>{JSON.stringify(filteredData, null, 2)}</pre>
    </div>
  );
};

export default CsvParser;

