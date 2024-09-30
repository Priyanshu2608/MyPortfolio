import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className="w-full">
              <img src={project.image} alt={project.title} width={350} height={350} className='mb-[280px] rounded mt-[50px] ' />
              <h2 className='text-[28px] font-extrabold  ml-[63vh] mt-[-350px] mb-4 text-purple-300 '>{project.title}</h2>
              <p className='mt-2 ml-[63vh] text-[20px] font-semibold  width={100}'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
