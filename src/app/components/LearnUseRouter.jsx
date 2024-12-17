"use client"
import {useRouter} from 'next/navigation'
import React from 'react'

const LearnUseRouter = () => {
    const router = useRouter();
    // console.log(router);
  return (
    <div className='flex felx-col items-center justify-center h-screen'>
      <h1 className=''>Use Router</h1>
      <button className='bg-blue-600 p-3 w-72 rounded-lg ml-7 cursor-pointer hover:opacity-90 shadow-xl text-white mt-5' type='button' onClick={()=> router.push('/admin/dashboard')}> Go To admin panel</button>
    </div>
  )
}

export default LearnUseRouter
