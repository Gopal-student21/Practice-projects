import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    
    <nav className='h-18 bg-purple-600 flex items-center justify-between px-10 text-white'>
      <div className='text-xl text-white font-bold gap-2 list-none'>
               <Link href="/"><li>Bitlinks</li></Link>
        </div>
      <ul className='flex justify-between items-center  text-[16px] gap-10'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
        <li className='flex gap-3'><Link href="/shorten" className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'><button>Try Now</button></Link>
        <Link href="/github" className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'><button>GitHub</button></Link></li>
      </ul>
    </nav>
    
  )
}

export default Navbar
