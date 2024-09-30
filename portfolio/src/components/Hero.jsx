import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilepic from '../assets/Profile.jpg'
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect/dist/core';

const container =(delay) =>({
  hidden:{ x: -100, opacity: 0},
  visible: {
    x:0,
    opacity:1,
    transition: { duration:0.5, delay:delay}
  }
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
        <div className="w-full lg:w-1/2">
        <div className=" flex flex-col items-center lg:items-start">
            <motion.h1
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='pb-13 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl'>Priyanshu Vasudev</motion.h1>
            <motion.span 
            variants={container(0.9)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent pt-4'>Frontend developer</motion.span>
            <motion.p 
            variants={container(1.3)}
            initial="hidden"
            animate="visible"
            className='my-2 max-w-xl py-6 font-light tracking-tight'>{HERO_CONTENT}</motion.p>

        </div>
        </div>
        <div className='w-full lg: w-/2 lg:p-8'>
        <div className="flex justify-center">
            <motion.img 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1,delay:1.5}}
            className='h-[420px] w-auto ml-[900px] mt-[-470px]' src={profilepic} alt="Priyanshu" />
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hero
