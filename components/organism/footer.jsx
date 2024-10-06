import React from 'react'
import List from '../atoms/list'
import Data from '../layout/test.data.json'
import Button from '../atoms/button'
import { FaPinterestSquare } from 'react-icons/fa';
import { BsLinkedin, BsFacebook, BsTiktok } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillYoutube, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
  return (
    <>
      <div className="border-y border-orange-300 my-20 hidden"> </div>
      <div className=''>
        <div className=' bg-contain bg-center text-white bg-[#ee4c13] bg-no-repeat w-full h-auto relative' >
          <div className='hidden sm:block float-right absolute -top-[4.96rem] right-0 md:right-10'>
            <img src="/images/leaseplan-logo.svg" alt="" className='' />
          </div>
          <div className='container mx-auto px-5 pt-8 lg:pt-20'>




            <div className='flex md:flex-row flex-col w-full justify-between md:gap-2 gap-5 lg:pb-12 pb-6'>
              <div className='footer-details  w-full md:w-3/5'>
                <h4 className='text-[14px] font-semibold font-sans'>CONTACT US</h4>
                <div className=' '>
                  <p className='text-[14px] font-sans font-light'>LeasePlan Emirates L.L.C.<br />Office #112-118 Al Fahim Building, Musaffah Industrial Area M4<br />M4 Abu Dhabi
                  </p>
                  {/* <p className='mb-5'>Tel: + 97124046444<br />Service Direct <br />800 DRIVER or <br />800 374837</p> */}
                  {/* <p> Copyright © 2023 Leaseplan</p> */}
                </div>
              </div>
              <div className='footer-details w-full md:w-2/5'>
              <p className='text-[14px] font-sans font-light'>Tel: + 97124046444<br />Service Direct <br />800 DRIVER or <br />800 374837</p>

              </div>
              {/* <div className='footer-details w-full md:w-2/5'>
                <h4 className='text-xl'>FOLLOW US ON</h4>
                <div className='flex flex-col sm:flex-row md:flex-col w-full md:gap-0 gap-5'>

                  <div className='flex text-3xl text-white md:mb-8'>
                    <img src="/icons/socialicons/facebook_new.svg" alt="" className='pr-5 cursor-pointer' />
                    <img src="/icons/socialicons/insta_new.svg" alt="" className='pr-5 cursor-pointer' />
                    <img src="/icons/socialicons/linkedin_new.svg" alt="" className='cursor-pointer' />

                  </div>
                  <div className='flex text-3xl text-white'>
                    <img src="/icons/socialicons/pin_new.svg" alt="" className='pr-5 cursor-pointer' />
                    <img src="/icons/socialicons/tiktok_new.svg" alt="" className='pr-5 cursor-pointer' />
                    <img src="/icons/socialicons/twitter_new.svg" alt="" className='cursor-pointer' />
                   

                  </div>


                </div>
              </div> */}

              {/* <List data={Data.footer1} />
              <List data={Data.footer3} />
              <List data={Data.footer4} /> */}
              {/* <List data={Data.footer5}/> */}

            </div>
            <p className=' text-white text-[12px] font-light pb-6 font-sans'>© 2024 ALD Automotive | LeasePlan is a leading global player in sustainable mobility and offers full-service leasing, flexible subscription services, fleet management services and multi-mobility solutions. With coverage in 44 countries, ALD Automotive | LeasePlan uses its unique position to lead the way to a zero-emission future and shape the digital transformation of the sector through innovation.</p>

          </div>

        </div>
       
        {/* <div className=" w-full py-5">
          <div className="xl:container 2xl:container mx-auto">
            <div>

              <p className="font-Inter text-normal-400 text-sm text-center">
                Copyright © 2023 Leaseplan
              </p>

            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Footer;