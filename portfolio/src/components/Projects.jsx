import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 60 }}
        transition={{ duration: 1.1 }}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h1>
      
      <div className="flex flex-wrap justify-center gap-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className='w-full md:w-1/2 lg:w-1/3 mb-8 flex flex-col items-center'>
            <motion.img 
              src={project.image} 
              alt={project.title} 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 200 }}
              transition={{ duration: 1.1 }}
              className='mb-6 rounded-lg w-[90%] md:w-[70%] lg:w-[80%] object-cover' 
            />
            <motion.h2 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.2 }}
              className='text-[24px] md:text-[28px] font-extrabold text-purple-300 text-center'
            >
              {project.title}
            </motion.h2>
            <motion.p 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.4 }}
              className='mt-2 text-[18px] md:text-[20px] font-semibold text-center max-w-[90%] lg:max-w-[80%]'
            >
              {project.description}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
