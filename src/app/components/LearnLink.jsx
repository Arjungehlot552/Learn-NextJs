import Link from 'next/link'
import React from 'react'

const LearnLink = () => {
    const id = 1;
    return (
        <div className='text-white flex flex-col  justify-between gap-8'>
            <Link className='mb-14' href="/admin/dashboard">Go To DashBoard</Link>
            <Link href={`/profile/account/${id}`}>Go To user profile</Link>
        </div>
    )
}

export default LearnLink
