import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div id='contact' className='py-16 px-6 bg-white text-gray-800'>
        <motion.div
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.8, ease:'easeOut'}}
            className='max-w-2xl mx-auto text-center'
        >
            <h2 className='text-3xl md:text-5xl font-bold mb-6'>
                Contact <span className='text-orange-500'>Me</span>
            </h2>
            <p className='text-gray-600 mb-10'>Have a Question or Wnat to work Together</p>
            <form action="" className='space-y-6'>
                <input 
                type="text" 
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400'
                placeholder='Your Name'
                />
                <input
                type="email"
                placeholder='your-email'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400'
                />
                <textarea
                    rows='5'
                    placeholder='your-message'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400'
                />
                <button
                    type='submit'
                    className='bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition duration-300'
                >
                    Send Message
                </button>
            </form>
        </motion.div>
    </div>
  )
}

export default Contact