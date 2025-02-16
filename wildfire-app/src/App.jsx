import { useState } from 'react'
import Grid from './components/Grid/Grid'
import './App.css'
import ControlPanel from "./components/ControlPanel/ControlPanel.jsx"
import background from './assets/A_img.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* added background image but looks ugly and unformatted af. */}
    {/*<div className="background" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>*/}
      <h1>🔥🔥Super Scary Wildfire Simulator🔥🔥</h1>
      <div className = "app_container">
        <Grid rows={8} columns={8}/>
      </div>
        {/* added control panel */}
      <ControlPanel /> 
    {/*</div>*/}
    </>
  )
}

export default App
