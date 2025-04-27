import React from 'react'
import { easeOut, motion } from 'framer-motion'
import dbmsimage from '../assets/dbms.jpg'
import auctionimg from '../assets/auction.jpg'
import pfmimage from '../assets/finance.jpg'
const Projects = () => {
    const projects=[
        {
            id:1,
            title: "DBMS for School",
            description:"A DBMS for storing and modifying the data of students in a school.",
            image:dbmsimage,
        },
        {
            id:2,
            title: "Auction And Bid",
            description:"A virtual auction system for auction and bidding of various precious Items.",
            image:auctionimg,
        },
        {
            id:3,
            title: "Personal Finance Manager",
            description:"PFM helps you to manage your daily financial activities with some clicks.",
            image:pfmimage,
        }
    ];
  return (
    <div id='projects' className='py-16 px-6 bg-white text-gray-800 min-h-screen'>
        <motion.div
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}  //Animate when user enters viewport
            viewport={{once:true}}          //animate only first time not on every scroll
            transition={{duration:0.8, ease:'easeOut'}}
            className='text-center mb-12'
        >
            <h2 className='text-3xl md:text-5xl font-bold mb-4'>
                My <span className='text-orange-500'>Projects</span>
            </h2>
            <p className='text-gray-600'>Here are some projects I have recently worked on</p>
        </motion.div>

        {/* showing projects card grid */}
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {
                projects.map((project)=>(
                    <motion.div
                        key={project.id}
                        whileHover={{scale:1.05}}
                        className='bg-yellow-100 rounded-xl overflow-hidden shadow-lg cursor-pointer transition'
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-48 object-cover'
                        />
                        <div className='p-6'>
                            <h3 className='text-2xl font-semibold mb-2'>{project.title}</h3>
                            <p className='text-gray-600'>{project.description}</p>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    </div>
  )
}

export default Projects