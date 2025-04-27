import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);
  return (
    <motion.nav
        initial={{backgroundColor:"rgba(255,255,255,0)", boxShadow:"0 0 0 rgba(0,0,0,0)"}}
        animate={{
            backgroundColor: scrolled? "rgba(255,255,255,1)": "rgba(255,255,255,0)",
            boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.1)" : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{duration:0.4, ease:"easeOut"}}
        className='fixed top-0 left-0 w-full z-50'
    >
        <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
            <div className='font-bold text-2xl text-orange-500'>Prashant Pal</div>
            <div className='space-x-6 text-gray-700'>
                <a href="#hero" className='hover:text-orange-500 transition'>Home</a>
                <a href="#projects" className='hover:text-orange-500 transition'>Projects</a>
                <a href="#about" className='hover:text-orange-500 transition'>About</a>
                <a href="#contact" className='hover:text-orange-500 transition'> Contact Me</a>
            </div>
        </div>
    </motion.nav>
  )
}

export default Navbar