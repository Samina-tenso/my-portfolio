import React from 'react'
import Image from 'next/image'
import myProfile from '../public/myProfile.jpg'
import Arrow from './Arrow.jsx'

function Home() {
    return (

        <div id="home" className='grid grid-cols-1 bg-beige sm:grid-cols-2 '>

            <div className=' sm:ml-6 sm:mr-8 text-center mt-10 '>
                <h1 className='font-serif text-beige bg-black text-5xl mb-10 mt-4 text-center sm:text-left sm:text-6xl  sm:mt-8 sm:ml-16 sm:mb-20 md:text-8xl'> Hello, I'm Samina Dahlberg</h1>
                <h4 className='font-sans text-center text-black px-2 text-md sm:text-left  sm:ml-16 md:pr-46 lg:text-xl' > I am a frontend developer based in Stockhom Sweden with an interest in building engaging and intuitive products. </h4>
                <h3 className="mt-6 mb-6 text-black text-center uppercase sm:text-left sm:ml-16" > I work mostly with:</h3>
                <ul className='flex flex-row justify-center uppercase text-beige  space-x-3 flex-wrap sm:space-x-2 sm:text-left sm:ml-16 sm:place-content-start sm:mb-28 sm:space-x-6 '>
                    <li className='border-2 p-3 rounded-full bg-black '> React</li>
                    <li className='border-2 p-3 rounded-full bg-black '> Javascript</li>
                    <li className='border-2 p-3 rounded-full bg-black'> CSS</li>
                    <li className='border-2 p-3 rounded-full bg-black'> HTML</li>
                </ul>
            </div>
            <div className='grid grid-cols-1 mt-9  m-auto  sm:mr-20 sm:grid-cols-2 sm:mt-20  md:ml-20'>
                <div>
                    <Image src={myProfile}
                        alt="me"
                        width={320}
                        height={420}
                        layout="intrinsic"
                        className='rounded-full'
                    />
                </div>
                <div className=' m-auto my-4 sm:ml-8 sm:mt-20 sm:pl-20 sm:pr-20 ' >
                    <div className='uppercase border-2 text-center rounded-full p-8  text-black' > check out my <br /> projects </div>
                    <Arrow />
                </div>
            </div>
        </div >


    )
}

export default Home
