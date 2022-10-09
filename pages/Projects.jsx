import React from 'react'
import Image from 'next/image'
import { projects } from './Data'

function Projects() {
    return (
        <div id="projects" className='bg-beige m-0'>
            <h1 className='font-serif text-red text-6xl mb-10 mt-0 pt-8 text-center sm:text-left sm:ml-20 sm:text-6xl sm:pt-8 sm:mt-0 sm:mb-10 md:text-7xl'>Projects </h1>

            {projects.map((project, index) => {
                return <a href={project.path} className='no-underline'> < div key={index} className="  flex-none grid grid-cols-1 place-items-center py-4 text-beige  sm:flex  sm:justify-center sm:py-8  sm:border-y4  sm:border-beige sm:rounded-r-full " >
                    <div className=''> <h2 className=" text-2xl text-red uppercase " >{project.projectName}</h2>
                        {project.tags.map((tag, index) => {
                            return <ul> <li class='text-red border rounded-full p-2 my-4 sm:my-2 sm:mr-8 text-sm  text-center bg-beige  ' key={index}>{tag} </li></ul>
                        })}</div>
                    <Image
                        src={project.image}
                        alt="project image"
                        width={300}
                        height={300}

                        className='rounded-full  '
                    />
                </div>
                </a>
            })}

        </div >
    )
}

export default Projects