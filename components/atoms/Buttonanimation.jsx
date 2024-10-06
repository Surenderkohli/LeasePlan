import React from 'react'
import Link from 'next/link'

const Buttonanimation = ({label, className, href}) =>{
  return (
   <Link href={href}>
     <div className={className}>
      <div className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-primary_orange_400 border-2 border-primary_orange_400 hover:border-primary_orange_300 rounded-[50px] hover:text-primary_orange_400 group hover:bg-primary_orange_50">
      <span className="absolute left-0 block w-full h-0 transition-all hover:bg-[#fdf3e5]  text-primary_orange_400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-0 ease">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </span>
      <span className="relative text-sm font-bold">{label}</span>
      </div>
    </div>
   </Link>
  )
}

const Buttonnext = ({label}) => {
    return (
        <div>
            <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
            <span className="relative invisible">{label}</span>
            </a>
        </div>
    )
}



Buttonanimation.Buttonnext = Buttonnext

export default Buttonanimation


