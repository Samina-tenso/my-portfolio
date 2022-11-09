import React from 'react'
import Image from 'next/image'
import { projects } from './api/Data'

function Projects() {
    return (
        <div id="projects" className='bg-black m-0  '>
            <h1 className='font-serif text-beige bg-black  text-6xl mb-10 mt-0 pt-8 text-center sm:pt-2 sm:text-left sm:pl-20  sm:text-6xl sm:pt-8 sm:mt-0 sm:mb-8 md:text-8xl'>Projects </h1>

            {projects.map((project, index) => {
                return <a key={index} href={project.path} className='no-underline'> <div key={index} className=" grid grid-cols-1 items-center py-4 text-beige  mx-20 sm:grid-cols-2    sm:border-y4  sm:border-beige sm:rounded-r-full " >
                    <div className=' m-auto sm:content-center  flex-wrap sm:space-x-6 sm:space-x-4 sm:flex sm:items-center'> <h2 className=" text-3xl  text-center uppercase text-beige sm:mr-12 sm:text-left md:text-4xl " >{project.projectName}</h2>
                        {project.tags.map((tag, index) => {
                            return <ul key={index}> <li className='text-black rounded-full p-2 my-2 text-sm sm:text-sm  text-center bg-beige' >{tag} </li></ul>
                        })} </div>
                    <div >
                        <Image
                            src={project.image}
                            alt="project image"
                            width={300}
                            height={300}
                            layout="intrinsic"
                            className='rounded-full '


                        />
                    </div>
                </div>
                </a>
            })}

        </div >
    )
}

export default Projects