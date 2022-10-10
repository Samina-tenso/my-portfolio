import React from 'react'
import { connect } from './Data'
import Link from 'next/link'

function Contact() {
    return (
        <div id="contact" className='grid grid-cols-1 pb-4 text-beige bg-black sm:grid-cols-3 '>
            <h1 className='text-3xl text-center py-8 uppercase sm:ml-18'>Connnect with me</h1>
            <div className='m-auto'>
                {connect.map(({ destination, path }, index) => {
                    return (

                        <ul className=' text-xl '>
                            <Link href={path}>
                                <a className="  hover:no-underline text-beige uppercase">
                                    <li key={index}> {destination}</li>
                                </a>
                            </Link>
                        </ul>

                    )
                })}
            </div>
        </div>
    )
}

export default Contact