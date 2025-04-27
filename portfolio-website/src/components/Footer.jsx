import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='bg-yellow-100 text-gray-800 py-8'>
        <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-sm'>©{new Date().getFullYear} Prashant Pal. All rights Reserved</p>
        
        <div className='flex space-x-6 mt-4 md:mt-0 mx-10'>
            <a href="to git hub will set later" target='_blank' className='hover:text-orange-500 transition'>GitHub</a>
            <a href="to git linkedin will set later" target='_blank' className='hover:text-orange-500 transition'>LinkedIn</a>
            <a href="to git mail will set later" target='_blank' className='hover:text-orange-500 transition'>E-mail</a>
        </div>
        </div>
    </div>
  )
}

export default Footer