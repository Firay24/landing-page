/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import AboutImg from '@/assets/about.jpg'
import Button from '@/components/Button'

function About() {
  return (
    <div className='grid grid-cols-2 mt-16 justify-between items-center mb-10'>
        <div className='flex flex-col p-5 ml-10 gap-y-3'>
            <h3 className='text-3xl font-medium'>Navigating your journey</h3>
            <p>
                It is a long established fact that a reader will be distracted by the 
                readable content of a page when looking at its layout. The point of using 
                Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                opposed to using Content here, content here
            </p>
            <Button text='Contact Us' style='bg-gray-800 text-white w-1/4 mt-10' />
        </div>
        <div className='relative group overflow-hidden'>
            <div className='w-full h-96 flex justify-center'>
                <Image src={AboutImg} className='w-1/2 h-full rounded-md drop-shadow-md' />
            </div>
            <div className='bg-white drop-shadow-md absolute bottom-6 ml-8 p-6 rounded-md w-1/4 h-36'>
                <p className='text-3xl font-semibold'>22K+</p>
                <p className='text-gray-500'>Location current weather</p>
            </div>
        </div>
    </div>
  )
}

export default About