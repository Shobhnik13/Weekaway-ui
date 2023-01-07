import React from 'react'
import  Hero_image from '../assets/Hero_image.jpg'

const Activities = (props) => {
  return (
    <div className=''>
        <div className=' relative p-4'>
            <h3 className='absolute text-2xl font-bold z-10 top-[65%] left-[40%] translate-x-[50%] translate-y-[50%]'>{props.activity}</h3>
            <img className='relative w-full h-full object-cover border-4 border-white shadow-lg' src={props.image} alt="" />
        </div>
    </div>
  )
}

export default Activities