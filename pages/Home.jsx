import React from 'react'
import Image from 'next/image'
import myProfile from '../public/myProfile.jpg'

function Home() {
    return (

        <div id="home" className=' grid grid-cols-1 bg-beige sm:grid-cols-2 '>

            <div className='ml-6 mr-8 sm:ml-20 mt-10 '>
                <h1 className='font-serif text-red text-5xl mb-10 mt-4 text-center sm:text-left sm:text-6xl  sm:mt-8 sm:mb-20 md:text-7xl'> Hello, I'm Samina Dahlberg</h1>
                <h4 className='font-sans text-center text-sm sm:text-left' > I am a <span className="text-red">frontend developer</span> with an interest in building engaging and intuitive products </h4>
                <h3 className="mt-10 mb-4"> I work mostly with:</h3>
                <ul className='flex flex-row font-light text-red  space-x-5 flex-wrap sm:mb-20 sm:space-x-6 '>
                    <li> React</li>
                    <li> Javascript</li>
                    <li> CSS</li>
                    <li> HTML</li>
                </ul>
            </div>
            <div className='grid grid-cols-1 mt-9 text-center m-auto  sm:mr-20 sm:grid-cols-2 sm:mt-30 sm:flex  sm:place-content-end'>
                <div>
                    <Image src={myProfile}
                        alt="me"
                        width="250px"
                        height="320px"
                        layout="fixed"
                        className='rounded-full'
                        sizes="(max-width:768px) 10vw"
                    />
                </div>
                <div className=' uppercase m-auto mb-6 mt-6 sm:text-left sm:pl-20 sm:m-auto'> check out my <br /> projects </div>
            </div>
        </div >


    )
}

export default Home
