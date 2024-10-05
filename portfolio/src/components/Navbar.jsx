import React from 'react'
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex items-center">
       <motion.h1 
       initial={{x:30, opacity:0}}
       animate={{y:0, opacity:1}}
       transition={{duration:1,delay:0.6}}

       className='font-serif text-xl font-semibold'>Priyanshu Vasudev</motion.h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <motion.a 
      whileHover={{opacity:1, y:-5}}
      href="http://www.linkedin.com/in/priyanshu-vasudev-off"><FaLinkedin className='cursor-pointer'></FaLinkedin></motion.a>
       <motion.a
        whileHover={{opacity:1, y:-5}}
       href='http://https://github.com/Priyanshu2608'><FaGithub className='cursor-pointer' ></FaGithub ></motion.a> 
       <motion.a 
        whileHover={{opacity:1, y:-5}}
       href="https://x.com/Priyanshu_V2608"><FaTwitterSquare className='cursor-pointer'> </FaTwitterSquare></motion.a>
        <motion.a 
         whileHover={{opacity:1, y:-5}}
        href="https://www.instagram.com/priyanshu.vasudev/"><FaInstagram className='cursor-pointer'></FaInstagram></motion.a>
      </div>
    </nav>
  )
}

export default Navbar;
 