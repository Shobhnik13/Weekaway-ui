import { useState } from 'react'
import './App.css'
import Topbar from './Components/Topbar'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Topbar/>
    <Navbar/>
         </div>
  )
}

export default App
