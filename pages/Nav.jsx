import React from 'react'
import Link from 'next/link'
function Nav() {
    return (
        <div className='bg-beige pt-3 sticky top-0 z-20 '>
            < ul className='uppercase container flex flex-row  place-content-end mx-auto hover:text-black space-x-4 sm:  '>
                <li> <Link href="home"><a className=" hover:no-underline uppercase"  >Home</a></Link></li>
                <li> <Link href="projects"><a className="hover:no-underline uppercase " >projects</a></Link></li>
                <li>  <Link href="about"><a className="hover:no-underline uppercase">about</a></Link></li>
            </ul>
        </div >
    )
}

export default Nav
