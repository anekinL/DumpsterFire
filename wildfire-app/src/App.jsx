import { useState } from 'react'
import Grid from './components/Grid/Grid'
import CsvParser from './components/CsvParser/CsvParser.jsx' // Import CsvParser
import './App.css'
import ControlPanel from "./components/ControlPanel/ControlPanel.jsx"
import background from './assets/A_img.png'

function App() {
  const [filteredData, setFilteredData] = useState([]); // State for filtered CSV data

  return (
    <>
      <h1>🔥🔥Super Scary Wildfire Simulator🔥🔥</h1>
      <CsvParser setFilteredData={setFilteredData} /> {/* Pass setter */}
      <div className="app_container">
        <Grid rows={8} columns={8} filteredData={filteredData} /> {/* Pass data */}
      </div>
      <ControlPanel /> 
    </>
  )
}

export default App

