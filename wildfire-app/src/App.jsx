import { useState } from 'react'
import Grid from './components/Grid/Grid'
import CsvParser from './components/CsvParser/CsvParser'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello</h1>
<<<<<<< Updated upstream
      <div className = "app_container">
        <Grid rows={8} columns={8}/>
=======
      <div classnam = "App_container">
        <Grid rows={8} columns={8}/>
      </div>
      <div>
        <CsvParser/>
>>>>>>> Stashed changes
      </div>
    </>
  )
}

export default App
