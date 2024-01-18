"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Links() {
    const pathName = usePathname();
    const Links = [
        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        {
            title:"Blog",
            path:"/blog"
        },
    ]
  return (
    <div className='flex gap-4 items-center justify-center'>
      {
        Links.map((link)=>{
            return <Link href={link.path} className={pathName === link.path && "py-2 px-8 rounded-2xl bg-white text-blue-500"} key={link.title}>{link.title}</Link>
        })
      }
    </div>
  )
}

export default Links
