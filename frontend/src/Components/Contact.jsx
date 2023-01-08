import React from 'react'
import contact_image from '../assets/contact_image.jpg'
const Contact = () => {
  return (
    <div className='max-w-[1200px] m-auto w-full p-4 py-16' id='contact'>
        <h2 className='text-center text-gray-700'>Send us a message</h2>
        <p className='text-center text-gray-700 py-2'>we're standing by!</p>
    <div className='flex flex-col md:flex-row '>
    <div>
        <img src={contact_image} alt="" className='w-full md:h-full object-cover p-2 max-h-[700px] h-[300px]'/>
    </div>
    <form action="">
        <div>
            <div>
            <input type="text" placeholder='First'className='border m-2 p-2 w-full'/>
            <input type="text" placeholder='Last' className='border m-2 p-2 w-full' />
            </div>
            <div>
            <input type="email" placeholder='Email' className='border m-2 p-2 w-full' />
            <input type="tel" placeholder='Phone' className='border m-2 p-2 w-full'/>
            </div>
            <input type="text" placeholder='Address' className='border m-2 p-2 w-full' />
            <div>
            <textarea name="" id="" cols="30" rows="10" placeholder='Type your message here' className='border m-2 p-2 w-full'></textarea>
            </div>
            <button className='m-2 w-full'>Submit</button>
        </div>
    </form>
    </div>
    </div>
  )
}

export default Contact