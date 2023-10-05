import React from 'react'
import Logo from './logo'
import Button from '../Button'

function Navbar() {
  const menu = ['Rasearch', 'Climate', 'Service', 'About Us']
  return (
    <div className='flex items-center justify-between py-6 px-12'>
      <div className='flex items-center'>
        <Logo />
      </div>
      <div className='hidden sm:block'>
        <ul className='flex gap-x-8 md:gap-x-3 space-x-4'>
          {
            menu.map((item, index) => (
              <li key={index} className='hover:text-blue-700 cursor-pointer'>
                <a href="">{item}</a>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='flex items-center gap-x-3'>
        <p className='font-semibold'>Log in</p>
        <Button text='Create Account' style='bg-gray-800 text-white' />
      </div>
    </div>
  )
}

export default Navbar