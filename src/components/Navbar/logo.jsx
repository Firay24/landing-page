/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import LogoImage from '@/assets/logo.png'

function Logo() {
  return (
    <div className='flex gap-x-2 items-center font-medium text-gray-700'>
        <Image src={LogoImage} className='w-10 h-10' />
        <p>Weather</p>
    </div>
  )
}

export default Logo