import { useState } from 'react'
import Grid from './components/Grid/Grid'
import './App.css'
import ControlPanel from "./components/ControlPanel/ControlPanel.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello</h1>
      <div classnam = "App_container">
        <Grid rows={10} columns={10}/>
      </div>
      {/* added control panel */}
      <ControlPanel /> 
    </>
  )
}

export default App
