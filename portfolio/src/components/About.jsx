import React from 'react'
import Aboutme from '../assets/about.jpeg';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <h2 className="my-10 text-center text-4xl">
        About<span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl w-[90%] max-w-[500px] lg:max-w-[400px] mb-8 lg:mb-0"
          src={Aboutme} 
          alt="About"
        />
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.9 }}
          className="text-center lg:text-left font-serif font-light text-lg max-w-[90%] lg:max-w-[600px]">
          {ABOUT_TEXT}
        </motion.p>
      </div>
    </div>
  )
}

export default About;
