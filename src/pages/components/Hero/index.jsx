/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import HeroImage from '@/assets/hero.jpg'
import { TbMinusVertical } from "react-icons/tb";
import { useApi } from '@/contexts/apiContext';
import { AiFillCloud } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

function HeroSection() {
  const apiData = useApi()
  const main1 = ['temp', 'feels_like', 'temp_min', 'temp_max']
  const main2 = ['pressure', 'humidity', 'sea_level', 'grnd_level']

  return (
    <div>
      <div className='flex justify-center'>
        <div className='relative group justify-center w-[96%] h-96 overflow-hidden rounded-md'>
          <div className='flex justify-center items-center'>
            <Image src={HeroImage} className='w-full h-full object-cover' />
          </div>
          <div className='absolute inset-0 flex items-center gap-x-4 justify-center text-gray-800'>
            <div className='w-1/2'>
              <h1 className='font-medium text-5xl mb-3'>Provide you a world wide <span className='text-blue-800 font-bold'>weather</span> forecast</h1>
              <p>
                The world Most Accurate Forecaster. With extreme weather on the rise. It so easy to
                receive the weather conditions in your current location
              </p>
            </div>
            <div className=' bg-white rounded-xl p-5 drop-shadow-md'>
              <div className='flex justify-center items-center gap-x-2 text-gray-400'>
                <ImLocation />
                <p>{apiData.name}</p>
              </div>
              <div className='flex flex-col items-center'>
                <div className='flex items-center gap-x-2'>
                  <AiFillCloud className='text-gray-200 text-8xl' />
                  <p className='text-3xl'>235 &deg;K</p>
                </div>
                <p className='font-semibold text-blue-500'>{apiData.weather[0].main}</p>
                <p className='text-gray-400'>{`Lon-${apiData.coord.lon} - Lat-${apiData.coord.lat}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white flex justify-between drop-shadow-md rounded-md p-8 w-3/4 mx-auto -mt-10 z-20 relative'>
        {main1.map((key, i) => (
          <div className='flex'>
            <div key={i} className='flex flex-col gap-y-1-2'>
              <div className='grid grid-cols-2 gap-x-5'>
                <p className='font-medium text-blue-500'>{key}</p>
                <p className='text-sm text-gray-600'>{apiData.main[key]}</p>
              </div>
              <div className='grid grid-cols-2 gap-x-5'>
                <p className='font-medium text-blue-500'>{main2[i]}</p>
                <p className='text-sm text-gray-600'>{apiData.main[main2[i]]}</p>
              </div>
            </div>
            {
              i === 3 ? null : (
                <TbMinusVertical className='text-4xl text-gray-200' />
              )
            }
          </div>
        ))}
        {/* <div className='flex'>
          <div className='flex items-center'>
            <TbMinusVertical className='text-4xl text-gray-400' />
            <div>
              <p className='font-medium'>Newyork</p>
              <p>12</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default HeroSection