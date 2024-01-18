import React from 'react'
import Links from './Links/Links'

function Navbar() {
  return (
    <nav className='flex p-4 justify-between items-center text-white bg-blue-500'>
      <img className='rounded-full' src="//unsplash.it/50/50" alt="" />
      <Links/>
    </nav>
  )
}

export default Navbar
