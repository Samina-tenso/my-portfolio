import React from 'react'
import Link from 'next/link'
import { links } from './Data'


function Nav() {
    return (
        <div className='bg-beige  pt-3     sticky top-0 z-20 '>
            {links.map(({ destination, path }, index) => {
                return (
                    <ul className='uppercase  flex flex-row justify-end pr-2  space-x-4'>
                        <Link href={path}>
                            <a className=" hover:no-underline uppercase">
                                <li key={index}> {destination}</li>
                            </a>
                        </Link>
                    </ul>
                )
            })}
            {/* < ul className='uppercase container pr-2 flex flex-row  place-content-end mx-auto hover:text-black space-x-4 sm:  '>
                <li> <Link href="home"><a  >Home</a></Link></li>
                <li> <Link href="projects"><a className="hover:no-underline uppercase " >projects</a></Link></li>
                <li>  <Link href="about"><a className="hover:no-underline uppercase">about</a></Link></li>
            </ul> */}

        </div >
    )
}

export default Nav
