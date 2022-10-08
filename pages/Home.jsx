import React from 'react'
import Image from 'next/image'
import myProfile from '../public/myProfile.jpg'
import Arrow from './Arrow.jsx'

function Home() {
    return (

        <div id="home" className=' grid grid-cols-1 bg-beige sm:grid-cols-2 '>

            <div className='ml-6 mr-8 sm:ml-20 mt-10 '>
                <h1 className='font-serif text-red text-5xl mb-10 mt-4 text-center sm:text-left sm:text-6xl  sm:mt-8 sm:mb-20 md:text-7xl'> Hello, I'm Samina Dahlberg</h1>
                <h4 className='font-sans text-center text-red text-sm sm:text-left md:pr-46' > I am a frontend developer with an interest in building engaging and intuitive products </h4>
                <h3 className="mt-10 mb-4 text-red text-center sm:text-left" > I work mostly with:</h3>
                <ul className='flex flex-row  justify-center font-light text-red  space-x-3 flex-wrap sm:text-left sm:place-content-start sm:mb-20 sm:space-x-6 '>
                    <li> React</li>
                    <li> Javascript</li>
                    <li> CSS</li>
                    <li> HTML</li>
                </ul>
            </div>
            <div className='grid grid-cols-1 mt-9   m-auto  sm:mr-25 flex sm:grid-cols-2 sm:mt-20 sm:flex'>
                <div>
                    <Image src={myProfile}
                        alt="me"
                        width="250px"
                        height="320px"
                        layout="fixed"
                        className='rounded-full '
                        sizes="(max-width:768px) 10vw"
                    />
                </div>
                <div className=' m-auto sm:ml-10 sm:mt-20 sm:pr-20' >
                    <div className=' uppercase mt-6 text-red sm:text-left sm:pl-10 '> check out my <br /> projects </div>
                    <Arrow />
                </div>


            </div>
        </div >


    )
}

export default Home
