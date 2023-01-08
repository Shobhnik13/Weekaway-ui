import { useState } from 'react'
import './App.css'
import Topbar from './Components/Topbar'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Activities from './Components/Activities'
import Data from './Data'
import Booking from './Components/Booking'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
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
    <Booking/>
    <Gallery/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
