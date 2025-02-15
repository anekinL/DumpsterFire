import { useState } from 'react'
import Grid from './components/Grid/Grid'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello</h1>
      <div classnam = "App_container">
        <Grid rows={10} columns={10}/>
      </div>
    </>
  )
}

export default App
