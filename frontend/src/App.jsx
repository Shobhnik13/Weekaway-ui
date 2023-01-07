import { useState } from 'react'
import './App.css'
import Topbar from './Components/Topbar'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Topbar/>
    <Navbar/>
    <Hero/>
    </div>
  )
}

export default App
