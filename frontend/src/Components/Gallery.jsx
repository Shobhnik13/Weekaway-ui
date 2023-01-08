import React from 'react'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic5.jpg'


const Gallery = () => {
  return (
    <div className='max-w-[1200px] m-auto w-full px-4 py-16' id='gallery'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='md:w-[40%] '>
                <img src={pic1} alt="" className='w-full h-full'/>
            </div>
            <div className=' flex  flex-col md:w-[60%]'>
                <div className='flex '>
                <div>
                    <img src={pic2} alt="" className=' w-full '/>
                </div>
                <div>
                    <img src={pic3} alt="" className='w-full '/>
                </div>
                </div>
                <div className='flex'>
                <div>
                    <img src={pic4} alt=""className='w-full mt-[-30px]' />
                </div>
                <div>
                    <img src={pic5} alt=""className='w-full' />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery