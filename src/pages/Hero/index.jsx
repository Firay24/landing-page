/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import HeroImage from '@/assets/hero.jpg'

function HeroSection() {
  return (
    <div>
      <div className='flex justify-center'>
        <div className='relative group justify-center w-[96%] h-96 overflow-hidden rounded-md'>
          <div className='flex justify-center items-center'>
            <Image src={HeroImage} className='w-full h-full object-cover' />
          </div>
          <div className='absolute inset-0 flex flex-col gap-y-3 items-center justify-center text-gray-800'>
            <h1 className='font-medium text-5xl'>Provide you a world wide weather forecast</h1>
            <p>
              The world Most Accurate Forecaster. With extreme weather on the rise. It so easy to
              receive the weather conditions in your current location
            </p>
          </div>
        </div>
      </div>
      <div className='bg-white drop-shadow-md rounded-md p-9 w-3/4 mx-auto -mt-10 z-20 relative'>
        <div className='flex justify-between'>
          <div>
            <p>Newyork</p>
            <p>12</p>
          </div>
          <div>
            <p>Newyork</p>
            <p>12</p>
          </div>
          <div>
            <p>Newyork</p>
            <p>12</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection