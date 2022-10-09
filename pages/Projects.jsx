import React from 'react'
import Image from 'next/image'
import { projects } from './Data'

function Projects() {
    return (
        <div id="projects" className='bg-beige m-0'>
            <h1 className='font-serif text-red text-8xl mb-10 mt-0 pt-8 text-center sm:text-left sm:ml-20 sm:text-6xl sm:pt-8 sm:mt-0 sm:mb-10 md:text-8xl'>Projects </h1>

            {projects.map((project, index) => {
                return <a href={project.path} className='no-underline'> < div key={index} className=" grid grid-cols-1 items-center py-4 text-beige  mx-20 sm:grid-cols-2  sm:py-8  sm:border-y4  sm:border-beige sm:rounded-r-full " >
                    <div>       <h2 className=" text-4xl pb-4 text-center uppercase text-red sm:text-left md:text-4xl " >{project.projectName}</h2>
                        {project.tags.map((tag, index) => {
                            return <ul className=' flex sm:flex-row justify-center sm:justify-start'> <li class=' text-beige border bg-red rounded-full p-2 my-2 sm:my-2 text-sm sm:text-xl  text-center bg-beige  ' key={index}>{tag} </li></ul>
                        })} </div>
                    <Image
                        src={project.image}
                        alt="project image"
                        width={300}
                        height={300}
                        layout="responsive"
                        className='rounded-full '
                        sizes="(min-width:640)20vw"

                    />
                </div>
                </a>
            })}

        </div >
    )
}

export default Projects