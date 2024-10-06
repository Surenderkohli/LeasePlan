import React from 'react'

const stepscontainer = ({number, title, contain}) => {
  return (
   <>
      <div className=' md:border-none border-b-[0.5px] border-[#d3d3d3] md:mb-0 mb-5'>
       <div className='block w-auto md:w-[100px] text-center mb-4 md:mb-0'>
           <div className='flex relative z-10 font-bold bg-white text-[#EA7B00] rounded-lg  justify-center items-center text-xl w-[50px] h-[50px] md:w-[100px] md:h-[100px] border shadow-lg text-center '>
               {number}
           </div>
           <div className='text-sm md:text-base py-3 text-[#494646] text-left font-semibold pt-4'>
               {title}
           </div>
           <div className='text-sm md:text-base text-[#9F9F9F] text-left text-light-grey'>
                {contain}
           </div>
       </div>
       </div>
   </>
  )
}

export default stepscontainer