import React from 'react'
import DrumKit from '../public/DrumKit.png'
import TickTackToe from '../public/TickTackToe.png'
import Image from 'next/image'

const projects = [
    {
        projectName: 'tic-tac-toe',
        path: 'https://samina-tenso.github.io/Tic-tac-toe/',
        tags: [
            'react',
            'javascript',
            'tailwind'

        ],
        image: TickTackToe,
    },
    {
        projectName: 'drum-kit',
        path: 'https://samina-tenso.github.io/drumKit/',
        tags: ['javascript',
            'html',
            'css'
        ],
        image: DrumKit,
    }
]

function Projects() {
    return (
        <div id="projects" className='bg-red m-0'>
            <h1 className='font-serif text-beige text-5xl mb-10 mt-0 pt-8 text-center sm:text-left ml-20 sm:text-6xl sm:pt-8 sm:mt-0 sm:mb-20 md:text-7xl'>Projects </h1>
            <div>
                {projects.map((project, index) => {
                    console.log(project.image)

                    return <a href={project.path}> < div key={index} className=" flex py-4 place-items-center justify-between px-20 text-beige border-t-2 border-beige" >
                        <h2 className=" text-3xl uppercase">{project.projectName}</h2>

                        {project.tags.map((tag, index) => {
                            return <ul > <li key={index}>{tag} </li></ul>
                        })}

                        <Image
                            src={project.image}
                            alt="project image"
                            width={100}
                            height={100}
                            className='rounded-full '



                        />

                    </div>
                    </a>
                })}

            </div>
        </div >
    )
}

export default Projects