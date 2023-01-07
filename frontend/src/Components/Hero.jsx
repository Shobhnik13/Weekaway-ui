import React from 'react'
import  Hero_image from '../assets/Hero_image.jpg'
const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src={Hero_image} alt="" className='h-full w-full object-cover'/>
        <div className='max-w-[1200px] m-auto'>
            <div className='absolute text-white top-[40%] h-full flex flex-col p-4 lg:text-2xl max-w-[500px]'>
                <h1 className='font-bold text-4xl'>Find Your Special Trip!!</h1>
                <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum in, est commodi omnis illum harum mollitia fugiat autem temporibus veritatis ipsum fuga voluptatem laudantium voluptas aut, accusamus officiis ab.</p>

            </div>
        </div>
    </div>
  )
}

export default Hero