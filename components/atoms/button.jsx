import React from 'react'
import { useState } from "react";
import Mobilefilter from './mobilefilter';
import Link from 'next/link'
import Dropdown from './dropdown';



const   Button = ({ label = "enter label", variant, href ,name,onClick,value,classname}) => {
  const [hover, setHover] = useState(false);
  const [state, setState] = useState('start')

  if (variant === "secondary") {
    return (
      <>
        <button className="gap-2 bg-orange-500  rounded-md font-medium lg: md:flex flex-row w-max px-8 py-2 items-center justify-center lg:text-lg md:text-base text-sm  text-white" onMouseEnter={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }}>
          {label}
          {/* <div className={`transition transform ${hover?'rotate-45':'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main-black.svg" />
            </div> */}
        </button>
      </>
    );
  }



  else if (variant === "primary-no-icon") {
    return (
      <>
        <button className="gap-2  rounded-sm lg:h-16 md:h-14 h-12 flex flex-row px-6 py-5 w-max items-center justify-center lg:text-lg md:text-base text-sm  bg-primary-500 text-white ">
          {label}
        </button>
      </>
    );
  }
  else if (variant === "choose-deal") {
    return (
      <>
        <button  className={classname}>
          {label}
        </button>
      </>
    );
  }

  else if (variant === "primary-white") {
    return (
      <>
        <button className="gap-2 bg-orange-500 text-white  rounded-md lg:h-8 md:h-14 h-12 flex flex-row px-10 py-6 border-2 border-orange-500 font-semibold w-max items-center justify-center sm:text-base  md:text-lg lg:text-xl xl:text-2xl rounded-lg" onMouseEnter={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }} value={value}>
          {label}
          {/* <div className={`transition transform ${hover?'rotate-45':'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main-blue.svg" />
            </div> */}
        </button>
      </>
    );
  }

  else if (variant === "primary-orange-next") {
    return (
      <>
        <button className="gap-2 text-orange-500 hover:bg-orange-500  hover:transition-all hover:text-white  rounded-[50px] lg:h-8 md:h-14 h-12 flex flex-row px-10 py-6 border border-orange-500 font-semibold w-max items-center justify-center lg:text-[22px] md:text-base text-sm   " onMouseEnter={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }}>
          {label}
          {/* <div className={`transition transform ${hover?'rotate-45':'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main-blue.svg" />
            </div> */}
        </button>
      </>
    );
  }
  else if (variant === "primary-orange-nextCard") {
    return (
      <>
        <button className="px-[15px] w-full py-[9px] text-[#f06400]  hover:transition-all hover:text-[#f06400]  rounded-[50px]    border border-[#f06400]   text-sm font-bold  hover:bg-[#fdf3e5] hover:border-[#ed8b00] hover:shadow-md " onMouseEnter={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }}>
          {label}
          {/* <div className={`transition transform ${hover?'rotate-45':'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main-blue.svg" />
            </div> */}
        </button>
      </>
    );
  }
  else if (variant === "primary-orange-card") {
    return (
      <>
        <button className="gap-2 text-orange-500 hover:bg-orange-500  hover:transition-all hover:text-white  rounded-md lg:h-8 md:h-14 h-12 flex flex-row px-[54px] py-3 border-2 border-orange-500 font-semibold w-max items-center justify-center lg:text-[22px] md:text-base text-sm    rounded-lg" onMouseEnter={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }}>
          {label}
          {/* <div className={`transition transform ${hover?'rotate-45':'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main-blue.svg" />
            </div> */}
        </button>
      </>
    );
  }

  else if (variant === "home-slider-btn") {
    return (
      <>
        <button className="gap-2 text-orange-500  rounded-md lg:h-8 md:h-14 h-12 flex flex-row px-10 py-6 border-2 border-orange-500 font-semibold w-max items-center justify-center lg:text-2xl md:text-lg text-sm   rounded-lg" onMouseEnter={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }}>
          {label}
          {/* <div className={`transition transform ${hover?'rotate-45':'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main-blue.svg" />
            </div> */}
        </button>
      </>
    );
  }

  else if (variant === "home-next") {
    return (
      <>
        <button className="gap-2 absolute mt-[-50px] text-orange-500 bg-[#FFDEBA]   lg:h-8 md:h-14 h-12 flex flex-row px-16 py-6 border-2 border-white shadow-xl font-semibold w-max items-center justify-center lg:text-2xl md:text-lg text-sm border-8 rounded-lg" onMouseEnter={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }}>
          {label}
          {/* <div className={`transition transform ${hover?'rotate-45':'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main-blue.svg" />
            </div> */}
        </button>
      </>
    );
  }
  else if (variant === "home-next_index") {
    return (
      <>
        <button className="gap-2 absolute mt-[-50px] text-[#FCFCFC] bg-[#02485C]   lg:h-8 md:h-14 h-12 flex flex-row px-16 py-6  border-white shadow-xl font-semibold w-max items-center justify-center lg:text-2xl md:text-lg text-sm border-8 rounded-lg" onMouseEnter={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }}>
          {label}
          {/* <div className={`transition transform ${hover?'rotate-45':'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main-blue.svg" />
            </div> */}
        </button>
      </>
    );
  }
  else if (variant === "home-next_index_type") {
    return (
      <>
      
        <button className="gap-2  text-[#FCFCFC] bg-white    lg:h-16 md:h-14 h-14 flex flex-row px-4 py-2   shadow-xl font-bold w-max items-center justify-center  text-sm  rounded-lg cursor-default " onMouseEnter={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }}>
          <span className='rounded-[50px] bg-text_headings py-[10px] px-[30px]' >{label}</span>
          {/* <div className={`transition transform ${hover?'rotate-45':'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main-blue.svg" />
            </div> */}
        </button>
      </>
    );
  }

  else if (variant === "find-out-more") {
    return (
      <>
        <button className="gap-2 text-[#494646] bg-slate-500  rounded-sm lg:h-8 md:h-14 h-12 flex flex-row px-8 py-6 border-2  font-semibold w-max items-center justify-center lg:text-2xl md:text-lg text-sm  bg-[#E6E6E6]  rounded-lg" onMouseEnter={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }}>
          {label}
          {/* <div className={`transition transform ${hover?'rotate-45':'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main-blue.svg" />
            </div> */}
        </button>
      </>
    );
  }

  else if (variant === "primary-white-next") {
    return (
      <>
        <button className="gap-2 justify-items-start sm:text-sm p-2.5  md:text-base  w-full hover:text-white hover:bg-orange-500 text-grey bg-white  rounded-md lg:h-8 md:h-14 h-12 flex flex-row px-8 py-6 border-2 font-normal  items-center rounded-lg  active:bg-orange-500  focus:text-white focus:outline-none  focus:bg-orange-500 ..." onMouseEnter={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }} onClick={onClick} value={value} name={name}>
          {label}
          {/* <div className={`transition transform ${hover?'rotate-45':'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main-blue.svg" />
            </div> */}
        </button>
      </>
    );
  }
  else if (variant === "primary-white-next-mileage") {
    return (
      <>
        <button className="gap-2 justify-items-start sm:text-sm p-2.5  md:text-base  w-full hover:text-white hover:bg-orange-500 text-grey bg-white  rounded-md lg:h-8 md:h-14 h-12 flex flex-row px-8 py-6 border-2 font-normal  items-center rounded-lg  active:bg-orange-500  focus:text-white focus:outline-none  focus:bg-orange-500 ..." onMouseEnter={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }} onClick={onClick} value={value}>
          {label}
          {/* <div className={`transition transform ${hover?'rotate-45':'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main-blue.svg" />
            </div> */}
        </button>
      </>
    );
  }

  else if (variant === "card-full-button") {
    return (
      <>
        <button className="gap-2 justify-center font-semibold text-base text-orange-500 w-full hover:bg-orange-500  hover:text-white bg-orange-100 rounded-sm lg:h-8 md:h-14 h-12 flex flex-row px-8 py-6 border-2   items-center   md:text-lg text-sm    rounded-lg" onMouseEnter={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }} onClick={href}>
          {label}

          {/* <div className={`transition transform ${hover?'rotate-45':'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main-blue.svg" />
            </div> */}
        </button>
      </>
    );
  }
  else if (variant === "card-full-button-readmore") {
    return (
      <>
        <button className="gap-2 justify-center font-semibold  text-[#FCFCFC] w-full  bg-[#02485C] lg:h-8 md:h-14 h-12 flex flex-row px-8 py-6    items-center   md:text-lg text-sm    rounded-md" onMouseEnter={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }} onClick={href}>
          {label}

          {/* <div className={`transition transform ${hover?'rotate-45':'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main-blue.svg" />
            </div> */}
        </button>
      </>
    );
  }

  else if (variant === "secondary-no-icon") {
    return (
      <>
        <button className="gap-2  rounded-sm lg:h-16 md:h-14 h-12 flex flex-row px-6 py-5 w-max items-center justify-center lg:text-lg md:text-base text-sm  bg-white border-2 border-gray-200 text-primary-900">
          {label}
        </button>
      </>
    );
  }
  else if (variant === "filter") {
    return (
      <>
         <button className="gap-2 bg-orange-500 text-white lg:hidden rounded-md lg:h-8 md:h-14 h-12 flex flex-row px-10 py-6 border-2 border-orange-500 font-semibold w-max items-center justify-center lg:text-2xl md:text-lg text-sm   rounded-lg" onMouseEnter={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }} onClick={href} >
          {label}
          {/* <div className={`transition transform ${hover?'rotate-45':'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main-blue.svg" />
            </div> */}
        </button>
      </>
    );
  }
  else if (variant === "prev") {
    return (
      <>
        <a className="flex flex-row md:w-14 md:h-14 h-10 px-5 py-5 items-center justify-center bg-primary-500" onClick={href}>
          <img className="w-5 " src="/icons/arrow/prev.svg" />
        </a>
      </>
    );
  }

  else if (variant === "next") {
    return (
      <>
        <a className="flex flex-row px-5 py-5 md:w-14 md:h-14 h-10 items-center justify-center bg-primary-500" onClick={href}>
          <img className="w-5 " src="/icons/arrow/next.svg" />
        </a>
      </>
    );
  }

  else if (variant === "white") {
    return (
      <>
        <button className="gap-2  bg-white text-orange-500  hover:bg-orange-500 hover:text-white hover:-translate-y-1 hover:scale-110  rounded-md lg:h-8 md:h-14 h-12 flex flex-row px-10 py-6 border-2 border-orange-500 font-semibold w-max items-center justify-center sm:text-base  md:text-lg lg:text-xl xl:text-2xl duration-300 rounded-lg"
         onMouseEnter={() => { setHover(true); }}    onMouseLeave={() => { setHover(false); }}
          value={value}>
          {label}
          {/* <div className={`transition transform ${hover?'rotate-45':'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main-blue.svg" />
            </div> */}
        </button>
      </>
    );
  }
  
  else {
    return (
      <>
        <button className="gap-2 rounded-sm lg:h-16 md:h-14 h-12 flex flex-row px-6 py-5 w-max items-center justify-center lg:text-lg md:text-base text-sm  bg-primary-500 text-white" onMouseEnter={() => { setHover(true); }}
          onMouseLeave={() => { setHover(false); }}>
          {label}
          <div className={`transition transform ${hover ? 'rotate-45' : 'rotate-0'}`}>
            <img className="w-5 md:w-6 " src="/icons/arrow/main.svg" />
          </div>
        </button>
      </>
    );
  }
}


const ButtonLink = ({ children, href, className }) => {
  return (
    <>
      <Link href={href} className={`${className}`}>
        {children}
      </Link>
    </>
  )
}

Button.Link = ButtonLink

export default Button