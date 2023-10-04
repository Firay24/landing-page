import React from 'react'
import { PiNotionLogoBold, PiPaperPlaneBold, PiPhosphorLogoBold, PiRecordBold } from "react-icons/pi";

function LogoSection() {
  return (
    <div className='flex justify-center gap-x-10 my-16'>
        <div className='flex text-gray-400 gap-x-1'>
            <PiNotionLogoBold className='text-4xl' />
            <p className='font-medium text-xl'>Company West</p>
        </div>
        <div className='flex text-gray-400 gap-x-1'>
            <PiPaperPlaneBold className='text-4xl' />
            <p className='font-medium text-xl'>Paper Plane</p>
        </div>
        <div className='flex text-gray-400 gap-x-1'>
            <PiPhosphorLogoBold className='text-4xl' />
            <p className='font-medium text-xl'>PostPhore</p>
        </div>
        <div className='flex text-gray-400 gap-x-1'>
            <PiRecordBold className='text-4xl' />
            <p className='font-medium text-xl'>Recod Studio</p>
        </div>
    </div>
  )
}

export default LogoSection