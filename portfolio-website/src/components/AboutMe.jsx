import React from 'react'
import { easeOut, motion } from 'framer-motion'
import profileimg from '../assets/profile.png'

const AboutMe = () => {
  return (
    <div id='about' className='py-16 px-6 bg-yellow-100 text-gray-800 min-h-screen'>
        <motion.div
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            transition={{duration:0.8, ease:'easeOut'}}
            className='max-w-4xl mx-auto flex flex-col items-center text-center'
        >
            <h2 className='text-3xl md:text-5xl font-bold mb-10'>About <span className='text-orange-500'>Me</span></h2>
            <img src={profileimg} alt="profile image" className='w-32 h-32 rounded-full mb-6 object-cover'/>
            <p className='text-lg text-gray-600 leading-relaxed mt-4'>Hello! I'm passionate <span className='text-orange-500 font-semibold'>C++ Developer</span> with strong skills in solving complex <span className='text-orange-500 font-semibold'>Data Strucures and Algorithms </span>problems.
            <br />
            <br />
            I have developed multiple projects using <span className='font-semibold text-orange-500'>C++ and STL</span>, and I constantly strive to write efficient and optimized code.
            </p> 
        </motion.div>
    </div>
  )
}

export default AboutMe