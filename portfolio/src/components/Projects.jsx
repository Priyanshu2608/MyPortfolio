import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:60}}
      transition={{duration:1.1}}
      className='my-20 text-center text-4xl'>Projects</motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className="w-full">
              <motion.img src={project.image} alt={project.title} width={350} height={350} 
               whileInView={{opacity:1,y:0}}
               initial={{opacity:0, y:200}}
               transition={{duration:1.1}}
              className='mb-[280px] rounded mt-[50px] ' />
              <motion.h2 
              whileInView={{opacity:1, x:0}}
              initial={{opacity:0, x:-100}}
              transition={{duration:1.2}}
              className='text-[28px] font-extrabold  ml-[63vh] mt-[-350px] mb-4 text-purple-300 '>{project.title}</motion.h2>
              <motion.p 
              whileInView={{opacity:1,y:0}}
              initial={{opacity:0, y:100}}
              transition={{duration:1.4}}
              className='mt-2 ml-[63vh] text-[20px] font-semibold  width={100}'>{project.description}</motion.p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
