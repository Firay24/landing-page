/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import LogoImage from '@/assets/logo.png'
import Button from '../Button'

function Footer() {
  return (
    <div className='bg-gray-900 text-white py-8 px-16 '>
        <div className='grid grid-cols-5 gap-x-10'>
            <div className='grid col-span-2'>
                <div className='flex flex-col gap-y-5 w-3/4 justify-between'>
                    <div className='flex items-center gap-x-2'>
                        <Image src={LogoImage} className='w-10 h-10' />
                        <p className='font-medium'>Wheater</p>
                    </div>
                    <p className='text-sm text-gray-400'>Provide you a world wide weather forecast</p>
                    <div className='border rounded-md p-2 w-full justify-between flex'>
                        <input type="text" placeholder='enter your email' className='bg-transparent w-1/2 focus:border-transparent focus:outline-none' />
                        <Button text='Subscribe' style='bg-blue-600' />
                    </div>
                </div>
            </div>
            <div>
                <p className='font-medium'>Quick Menu</p>
                <div className='mt-2 text-sm flex flex-col gap-y-2'>
                    <p>Home</p>
                    <p>Rent</p>
                    <p>Sell</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
            </div>
            <div>
                <p className='font-medium'>About Us</p>
                <div className='mt-2 text-sm flex flex-col gap-y-2'>
                    <p>Payment Plans</p>
                    <p>Make saving more</p>
                    <p>Tax Calculator</p>
                    <p>Talk to us</p>
                </div>
            </div>
            <div>
                <p className='font-medium'>Contact Info</p>
                <div className='mt-2 text-sm flex flex-col gap-y-2'>
                    <p>123 main street, Apt 48 Los Angeles, CA 90001, USA</p>
                    <p>+62 952 3179 6284</p>
                    <p>company@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="h-0.5 w-full bg-gray-500 mx-auto mt-8 mb-6"></div>
        <div className='text-center text-sm text-gray-500'>
            <p>Copyright © 2023 Weather</p>
        </div>
    </div>
  )
}

export default Footer