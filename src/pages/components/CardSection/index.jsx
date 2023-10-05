/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import { IoLocationOutline } from "react-icons/io5";
import { CiTempHigh } from "react-icons/ci";
import { PiWindBold } from "react-icons/pi";
import { MdPersonOutline } from "react-icons/md";
import { cardContent } from "@/util/dataCard"

function Card() {
  return (
    <div className='mt-36 mb-10 py-6 px-16'>
        <div className='text-center'>
            <h3 className='text-3xl font-semibold text-gray-900'>Our Popular Content</h3>
            <p className='w-1/2 mx-auto mt-3 text-sm text-gray-700'>
                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC, 
                making it over 2000 years old.
            </p>
        </div>
        <div className='flex justify-center gap-x-10 flex-wrap'>
          {
            cardContent.map((card, index) => (
              <div key={index} className='mt-10 w-fit bg-white drop-shadow-md rounded-md'>
                <div className='w-64 h-36'>
                  <div className='w-full h-full rounded-t-lg drop-shadow-xl overflow-hidden'>
                    <Image src={card.src} alt='Card' className='object-cover object-center w-full h-full' />
                  </div>
                </div>
                <div className='py-2 px-4'>
                    <p className='text-xl font-medium text-blue-600 mt-3'>{card.title}</p>
                    <p className='font-medium text-gray-700'>{card.season}</p>
                    <div className="h-0.5 w-full bg-gray-300 mx-auto mt-4"></div>
                </div>
                <div className='mt-3 text-gray-800 pb-4 px-4'>
                    <div className='flex items-center gap-x-2'>
                        <IoLocationOutline />
                        <p className='text-sm'>{card.location}</p>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex items-center gap-x-1'>
                            <CiTempHigh className='text-lg' />
                            <p className='text-sm'>{card.temp}</p>
                        </div>
                        <div className='flex items-center gap-x-1'>
                            <MdPersonOutline className='text-lg' />
                            <p className='text-sm'>{card.status}</p>
                        </div>
                        <div className='flex items-center gap-x-1'>
                            <PiWindBold className='text-lg' />
                            <p className='text-sm'>{card.wind}</p>
                        </div>
                    </div>
                </div>
            </div>
            ))
          }
        </div>
        
    </div>
  )
}

export default Card