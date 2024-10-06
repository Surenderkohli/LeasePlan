import React, { useState,useEffect } from 'react'
import { useRef } from 'react';

function Search(props) {
const[searchText,setsearchText]=useState()
const [ showbackground, setShowBackground] = useState(true)


const handleChangescroll = () => {
    if(window.scrollY >= 80){
        setShowBackground(false)
    }
    else {
        setShowBackground(true)
    }
}

useEffect(() => {
    window.addEventListener('scroll', handleChangescroll)
})
// console.log(searchText);
const handleSearch=async(e)=>{
    
}
    return (
        <div className={` relative flex items-center justify-center`}>
            <div className="flex  w-full">
                <input
                    type="text"
                    ref={props.manualsearch}
                    className="flex flex-1 px-4 py-2 text-[#494646] bg-white border rounded-[50px] focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search here for Cars..."  onChange={(e)=>props.applySearch(e.target.value) }
                />
                {/* <button className="px-4 absolute w-12 h-12 right-0 top-0 text-white bg-orange-500 rounded-lg" onClick={()=>props.applySearch(searchText)} >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button> */}
            </div>

                                                             
        </div>
    );
}

export default Search