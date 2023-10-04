/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { ImQuotesLeft } from "react-icons/im";
import Image from 'next/image';
import ManImage from '@/assets/man.jpg'
import WomanImage from '@/assets/woman.jpg'

function Comment() {
  return (
    <div className='my-10'>
        <div className='text-3xl font-medium text-center'>
            <p>Kind words from out happy customer</p>
        </div>
        <div className='flex justify-center mt-8 gap-x-8'>
            <div className='bg-white w-1/3 py-6 px-10 border rounded-md'>
                <ImQuotesLeft className='text-4xl text-blue-600 mb-4' />
                <p className='text-gray-700 text-sm mb-4'>
                    It is a long established fact that a reader will be distracted by the readable content 
                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to using Content here,
                    content here, making it look like readable English.
                </p>
                <div className='flex items-center gap-x-4'>
                    <div className='w-10 h-10 overflow-hidden rounded-full'>
                        <Image src={ManImage} className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <p className='font-semibold'>Arefin Sulvo</p>
                        <p className='text-xs text-gray-700'>CEO, Noonbrew</p>
                    </div>
                </div>
            </div>
            <div className='bg-white w-1/3 py-6 px-10 border rounded-md'>
                <ImQuotesLeft className='text-4xl text-blue-600 mb-4' />
                <p className='text-gray-700 text-sm mb-4'>
                    It is a long established fact that a reader will be distracted by the readable content 
                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to using Content here,
                    content here, making it look like readable English.
                </p>
                <div className='flex items-center gap-x-4'>
                    <div className='w-10 h-10 overflow-hidden rounded-full'>
                        <Image src={WomanImage} className='w-full h-full object-cover' />
                    </div>
                    <div>
                        <p className='font-semibold'>Arefin Sulvo</p>
                        <p className='text-xs text-gray-700'>CEO, Noonbrew</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comment