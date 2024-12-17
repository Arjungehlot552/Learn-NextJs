import React from 'react'

const page = () => {
    return (
        <div className='border flex flex-row justify-between rounded-full text-white p-4 m-20 '>
          <div>  This is my user seating page</div>
            <div className='flex justify-end '>
                
                <ul className='flex justify-end items-end text-end cursor-pointer flex-row gap-4'>
                     <li>Home</li>
                     <li>About</li>
                     <li>Service</li>
                     <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default page
