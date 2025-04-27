import React from 'react'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section
        id='hero'
        className=' bg-yellow-100 min-h-screen flex flex-col justify-center items-center px-6 text-gray-800'
    >
        <motion.div
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:1}}
            className='text-center'
        >
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                Hi! I'm <span className='text-orange-500'>Prashant Pal</span>
            </h1>
            <p className='text-lg md:text-2xl text-gray-600 mb-6'>C++ Developer • DSA Enthusiast</p>
            <p className='max-w-xl text-gray-500 mb-8 mx-auto'>I create Stunning logical solutions for your Problems</p>
            <button className='px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg rounded-full transition'>View Projects</button>
        </motion.div>
    </section>
  )
}

export default Hero