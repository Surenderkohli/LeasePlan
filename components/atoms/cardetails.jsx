
import React, { useState } from 'react'
import Button from './button'
import Data from '../layout/test.data.json'



const Cardetails = ({ carseries, carname, cardetails, caricons, morecontent, including, maintain, cartype, gas, fuel, mileage,seat,doors }) => {

  const [showmore, setShowmore] = useState(false)



  return (
    <>
      <div className='block w-auto h-auto bg-white border border-slate-100 shadow-lg px-8 py-8 rounded-xl mt-5'>
        <div className='flex '>
          <h2 className='text-lg lg:text-xl text-[#494646] font-bold'>{carname}</h2>
          <h2 className='text-lg lg:text-xl text-[#494646] font-bold'>{carseries}</h2>
        </div>
        <div>
          <p className='text-[#939393] text-sm md:text-base'>{cardetails}</p>
        </div>

        <div className="flex flex-wrap justify-between py-6 gap-y-2  ">
          <div className='w-1/3 sm:w-auto flex flex-col gap-1 text-center'>
            <img src="/images/gear_new.svg" className='mx-auto lg:w-full w-14' />
            <p className="text-sm">{cartype}</p>
          </div>
          <div className='w-1/3 sm:w-auto flex flex-col gap-1 text-center'>
            <img src="/images/Co2_new.svg" className='mx-auto lg:w-full w-14' />
            <p className="text-sm">{gas}</p>
          </div>

          <div className='w-1/3 sm:w-auto flex flex-col gap-1 text-center'>
            <img src="/images/fuel_new.svg" className='mx-auto lg:w-full w-14' />
            <p className="text-sm">{fuel}</p>
          </div>

          <div className='w-1/3 sm:w-auto flex flex-col gap-1 text-center'>
            <img src="/images/mileage_new.svg" className='mx-auto lg:w-full w-14' />
            <p className="text-sm">{mileage}</p>
          </div>

          <div className='w-1/3 sm:w-auto flex flex-col gap-1 text-center'>
            <img src="/images/door_new.svg" className='mx-auto lg:w-full w-14' />
            <p className="text-sm">{doors}</p>
          </div>

          <div className='w-1/3 sm:w-auto flex flex-col gap-1 text-center'>
            <img src="/images/seat_new.svg" className='mx-auto lg:w-full w-14' />
            <p className="text-sm">{seat}</p>
          </div>

        </div>

        <div className=' carDetails_include flex flex-col lg:flex-row lg:gap-0 gap-2 justify-between w-full'>
          <div className='mb-5 md:mb-0'>
            <h2 className='text-base md:text-lg font-bold text-[#494646] '>What&apos;s included</h2>
            {Data.ServiceData.map((data,i) => {
              return (
                <>
                  <div className='include_items flex lg:p-2.5 p-1 items-start' key={i}>
                    <img className='w-7 h-6 pr-3' src={data.icon} />
                    <h4 className=' text-base font-normal text-[#939393]'> {data.maintext}</h4>
                  </div>
                </>
              )
            })}

          </div>

          <div className='carDetails_maintenance'>
            <h2 className='text-base md:text-lg font-bold text-[#494646]'>Optional maintenance package</h2>
            {Data.ServiceDatanext.map((data) => {
              return (
                <>
                  <div className='include_items flex lg:p-2.5 p-1 items-start'>
                    <img className='w-7 h-6  pr-3' src={data.icon} />
                    <h4 className='text-base font-normal text-[#939393]'> {data.maintext}</h4>
                  </div>
                </>
              )
            })}
          </div>
        </div>

        <div>
          <p className='p-2.5 text-[#EA7B00] text-sm md:text-base'>
            Find out more about maintenance package
            {
              showmore ?
                <>
                  {morecontent}
                </> : null
            }
          </p>
          <Button
            variant='card-full-button-readmore'
            label={showmore ? 'Read Less' : 'Read More'}
            href={() => setShowmore(!showmore)} />

        </div>

      </div>
     
    </>
  )
}


export default Cardetails