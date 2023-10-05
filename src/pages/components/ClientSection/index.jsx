/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import ClientImage from '@/assets/client.jpg'
import Image from 'next/image'

function ClientSection() {
  return (
    <div className='bg-gray-900 text-white py-6'>
        <div className='flex justify-between py-6 px-16'>
            <div className='flex items-center gap-x-3'>
                <p className='text-4xl font-bold'>11k+</p>
                <p className='w-1/2 text-sm text-gray-300'>Happy customer with our service</p>
            </div>
            <div className='flex items-center gap-x-3'>
                <p className='text-4xl font-bold'>11k+</p>
                <p className='w-1/2 text-sm text-gray-300'>Happy customer with our service</p>
            </div>
            <div className='flex items-center gap-x-3'>
                <p className='text-4xl font-bold'>11k+</p>
                <p className='w-1/2 text-sm text-gray-300'>Happy customer with our service</p>
            </div>
        </div>
        <div className="h-0.5 w-[90%] bg-gray-500 mx-auto my-10"></div>
        <div className='flex justify-between py-6 px-16'>
            <h3 className='text-3xl w-1/2 font-semibold'>Where Comfort Meets Conveniece</h3>
            <p className='w-1/2 text-gray-400'>
                It is a long established fact that a reader will be distracted by the readable content of
                a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
                more-or-less normal distribution of letters, as opposed to using Content here, 
                content here
            </p>
        </div>
        <div className='w-[90%] h-96 flex justify-center mx-auto -mt-24 relative -bottom-36'>
            <Image src={ClientImage} className='w-full h-full rounded-md' />
        </div>
    </div>
  )
}

export default ClientSection