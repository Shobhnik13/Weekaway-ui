import React from 'react'

const Booking = () => {
  return (
    // outermost div 
    <div className='max-w-[1200px] m-auto w-full p-4' >
        <form action="" className='lg:flex lg:justify-between w-full items-center '>
            {/* div for  selection options */}

            <div className='flex flex-col my-2 py-2'>
                <label htmlFor="">Destination</label>
                <select name="" id="" className='lg:w-[300px] md:w-full border rounded-md p-2'>
                    <option value="">Grande Antique</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
            {/* div for all the inputs  */}

            <div className='flex w-full items-center'>
                {/* individually div for every seperate input  */}
                <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                    <label htmlFor="">Check-In</label>
                    <input type="date" name="" id="" className='border rounded-md p-2' />
                </div>
                <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2 '>
                <label htmlFor="">Check-Out</label>
                <input type="date" name="" id="" className='border rounded-md p-2' />
                </div>
            </div>

            {/* div for search  */}
            <div className='flex flex-col w-full my-2 p-2'>
                <label htmlFor="">Search</label>
                <button className='w-full rounded-md'>Rates and Availabilities</button>
            </div>
        </form>
    </div>
  )
}

export default Booking