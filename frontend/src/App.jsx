import { useState } from 'react'
import './App.css'
import Topbar from './Components/Topbar'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Activities from './Components/Activities'
import Data from './Data'
function App() {
  const [count, setCount] = useState(0)
  const activitiesArray=Data.map((item)=>{
    return(
      <Activities
      activity={item.activity}
      image={item.image}
      />
    )
  })
  return (
    <div className="App">
    <Topbar/>
    <Navbar/>
    <Hero/>
    <div className='max-w-[1200px] m-auto md:flex mt-[-45px] w-full '>
    {activitiesArray}
    </div>
    </div>
  )
}

export default App
