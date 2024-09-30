import React from 'react'
import Aboutme from '../assets/about.jpeg';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className='my-10 text-center text-4xl'>
            About
            <span className='text-neutral-500'> Me</span>
        </h2>
        <div className="flex justify-center">
        <div className="w-full  lg:p-8">
        <div className='flex items-center justify-center'>
            <motion.img
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.8}}
            className='rounded-2xl w-[500px]  py-[-20px]' src={Aboutme} alt="About" />
        </div>
        <div className='w-[100%] '>
        <div className="flex justify-center items-center  lg:justify-start ">
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.9}}
            className='flex justify-center items-center ml-[10px] py-[25px] font-serif font-light'>{ABOUT_TEXT}</motion.p>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About
