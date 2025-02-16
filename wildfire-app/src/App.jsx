import { useState } from 'react'
import Grid from './components/Grid/Grid'
import CsvParser from './components/CsvParser/CsvParser'
import './App.css'

function App() {
  const [filteredData, setFilteredData] = useState([]);
  return (
    <>
    <h1>Wildfire Simulation</h1>
      <div className = "app_container">
        <CsvParser onDataUpdate={setFilteredData} />
        <Grid rows={8} columns={8}/>
      </div>
    </>
  )
}

export default App
