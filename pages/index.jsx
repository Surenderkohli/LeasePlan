import React, { useState, useEffect } from 'react'
import Header from '../components/organism/header';
import Homeslider from '../libs/homeslider'
import Footer from '../components/organism/footer';
import Tabs from '../components/atoms/tabs';
import Test from '../components/organism/test'
import Button from '../components/atoms/button';
import List from '../components/atoms/list';
import Data from '../components/layout/test.data.json'
import Boxslider from '../libs/boxslider';
import Dropdown from '../components/atoms/dropdown';
import { Mainlyout } from '../components/organism/Maincomponent/mainlyout';
import Link from 'next/link';
// import axios from 'axios';
import axios from '../utils/backendAxios'
import BoxGrid from '../components/atoms/box';
// import { Inter, Rubik } from '@next/font/google'
import clsx from 'clsx';

// export const title = Quicksand({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
// });

// export const title = Rubik({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
// });

// export const text = Inter({
//   subsets: ['latin'],
//   weight: ['400', '700'],
// });


function Index(props) {
  const [activeTab, setActivetab] = useState(0);
  const [apiData, setApiData] = useState(props)
  const [visibleElements, setVisibleElements] = useState(4);
  const [showTransition, setShowTransition] = useState(false)
  const [showTransitionRight, setShowTransitionRight] = useState(false)

  
  // console.log(apiData,"apiData-----");
  // console.log( props.bannerList," bannerList");



  // console.log(props.data);
  // let data=props.data

  // console.log();
  const handleTabClick = (index) => {
    return (
      setActivetab(index)
    )
  }
  // console.log(props?.bestDeals);

  const handleChangescroll = () => {
    if (window.scrollY > 900) {
      setShowTransition(true)
    }
    else {
      setShowTransition(false)
    }
  }
  const handleChangescroll2 = () => {
    if (window.scrollY > 1250) {
      setShowTransitionRight(true)
    }
    else {
      setShowTransitionRight(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleChangescroll)
    window.addEventListener('scroll', handleChangescroll2)

  })

  return (
    <>
      <Mainlyout >
        {/* {Home slider} */}
        <Homeslider bannerList={props?.bannerList} />

        <div className='bg-[#f6f8fb]'>
          <Dropdown apiData={props} />
        </div>

        {/* {Box slider} */}
        <div className=' h-max m-auto w-full lg:pb-14 pb-8'>
          {/* <Boxslider dealsData={props?.bestDeals} text='Best Private Leasing Deals For You' /> */}
          <div className='' >

            <div className='container mx-auto px-5 pt-8  lg:pt-20 '>
              {/* <h1 className={clsx('text-8xl font-bold', title.className)}>
                Hi, I&apos;m Omari
            </h1> */}
              <div>
                <h2 className='text-xl md:text-3xl font-bold text-gray-700 pb-6'>Best Private Leasing Deals For You</h2>
                {/* <p className='font-text text-2xl'>this is test toyota </p> */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]'>

                  {
                    props?.bestDeals?.data?.carOffers?.slice(0, visibleElements).map((item, key) => {
                    
                      return (
                        <> <BoxGrid.BoxGridCard_index
                            image={item?.details?.image[0]?.imageUrl}
                            carname={item?.carBrand_id?.companyName}
                            carmodel={item?.carSeries_id?.seriesName}
                            month={item?.offers[0]?.duration}
                            monthmileage={item?.offers[0]?.annualMileage}
                            cartype={item?.details?.transmission}
                            gas={item?.details?.fuelType}
                            fuel="Petrol"
                            mileage={item?.details?.tankCapacity}
                            hreflink={`/contact/${item._id}`}
                            className={'mx-auto mt-0 '}
                            price={`AED ${item?.offers[0]?.monthlyCost}`}
                          />


                        </>
                      )
                    })
                  }
                  {/* {props?.bestDeals?.data?.carOffers?.length > visibleElements && (
                    <div className='w-full flex justify-center pt-2'>
                      <button onClick={() => setVisibleElements((prev) => prev + 4)} className='bg-[#f06400] hover:bg-[#ee4c13] cursor-pointer text-[#fff] py-3 px-6 rounded-[50px] font-bold' >View More Cars</button></div>
                  )} */}
                </div>
                {props?.bestDeals?.data?.carOffers?.length > visibleElements && (
                    <div className='w-full flex justify-center pt-[32px]'>
                      <button onClick={() => setVisibleElements((prev) => prev + 4)} className='bg-primary_orange_400 hover:bg-primary_orange_300 cursor-pointer text-[#fff] py-3 px-6 rounded-[50px] font-bold' >View More Cars</button></div>
                  )}

              </div>
            </div>
          </div>

        </div>

        {/* <Boxslider dealsData={props?.bestDeals} text='Best Private Leasing Deals For You' /> */}

        {/* Best Service */}

        <div className='flex-row  justify-between md:py-5 xl:py-0 hidden'>
          <div>
            <div>


              <img className='h-auto  leaseplan-service-img md:w-full' src="/images/left.png" />
            </div>
          </div>
          <div className='container mx-auto xs:w-4/5 md:w-4/5 lg:w-1/2 m-auto px-5'>
            <div className=''><h2 className='text-sm md:text-base font-semibold w-[180px] h-[40px] bg-[#F5F5F5] border-0 rounded-lg text-center p-1 '>Best services</h2></div>
            <h1 className='text-xl md:text-3xl mt-3 mb-6 font-bold text-gray-700'>Feel the best experience with our <span className='text-primary_orange_400  '>LeasePlan</span> service</h1>
            <List.Listitem data={Data.homeList} />
            <List.Listitem data={Data.homeList1} />
            <List.Listitem data={Data.homeList2} />
          </div>
        </div>

        <div className='relative'>
          <div className='container mx-auto py-8 lg:py-20 px-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-16 xl:gap-0'>
              <div></div>
              <div className='lg:absolute left-0 top-0'>
                <img
                  src='/images/leftCar.png'
                  className='lg:h-[514px] xl:h-[532px] md:h-[450px] h-[360px] '
                  // className={`lg:transition-transform duration-300 ease-out ${showTransition ? 'lg:translate-x-0' : 'lg:translate-x-[-800px]'
                  //   } lg:translate-y-0 lg:translate-z-0 transform translate-y-0 translate-z-0`}
                  // style={{
                  //   transform: `translateX(${showTransition ? '0' : '-800px'}) translateY(0px) translateZ(0px)`,
                  //   transition: 'transform 3s ease-out', 
                  // }}
                />

              </div>
              <div className='pl-5 lg:pt-0 pt-6'>

                <div className='mb-4'><h2 className='text-sm md:text-base font-normal w-[180px] h-[40px] bg-primary_orange_400 text-white border-0 rounded-[50px] text-center p-1  pt-2'>Best services</h2></div>
                <h1 className='text-xl md:text-3xl mt-3 mb-6 font-bold text-gray-700'>Feel the best experience with our <span className='text-primary_orange_400'>LeasePlan</span> service</h1>
                <List.Listitem data={Data.homeList} classNames={`pb-6`}/>
                <List.Listitem data={Data.homeList1} classNames={`pb-6`}/>
                <List.Listitem data={Data.homeList2} />
              </div>

            </div>
          </div>
        </div>

        {/* 7 Easy Steps */}
        <div className='relative'>
        <div className='container mx-auto pt-8 lg:pt-20 px-5 '>
          <div className='grid grid-cols-1 lg:grid-cols-2 ' >
            <div className='flex flex-col gap-6'>
              <h2 className='text-xl md:text-3xl text-gray-700 font-bold '>Here are the 7 easy steps required to start driving your <span className='text-primary_orange_400'>Private Lease</span> car</h2>
              <Tabs title="Long-Term Private" nexttitle="Flexi Private Lease" index={0} activeTab={activeTab} handleTabClick={handleTabClick} />
            </div>
            <div></div>
            <div className='lg:absolute top-[9px] right-0 overflow-hidden order-first flex justify-end lg:pb-0 pb-6'>
              <img src="/images/right.png" alt="" className='xl:h-[464px] lg:h-[548px] md:h-[450px] h-[360px]'  
              // style={{
              //       transform: `translateX(${showTransitionRight ? '0' : '350px'}) translateY(0px) translateZ(0px)`,
              //       transition: 'transform 2s ease-out', 
              //     }}
                  />
            </div>

          </div>

        </div>
        </div>

        {/* <div className=' private-lease-section flex lg:flex-row flex-col-reverse justify-between relative hidden'>
          <div className='container xs:w-1 lg:w-1/2 m-auto'>
            <h1 className='xl:w-9/12  w-full text-xl md:text-3xl text-gray-700 font-bold  px-5 py-9 mx-auto'>Here are the 7 easy steps required to start driving your <span className='text-orange-500'>Private Lease</span> car</h1>
            <Tabs title="Long-Term Private" nexttitle="Flexi Private Lease" index={0} activeTab={activeTab} handleTabClick={handleTabClick} />
          </div>
          <div>
            <img className='private-lease-img h-auto float-right sm:float-right md:w-full' src="/images/right.png"
            
          
            
            />
          </div>

        </div> */}
      </Mainlyout>
    </>

  )
}

export async function getServerSideProps() {
  let bannerList;
  let leaseTypeList;
  let carBrandList;
  let carModalList;
  let bestDeals;

  // Fetch data from external API
  try {
    bannerList = await axios.get(`/banner/get-banner`)
    leaseTypeList = await axios.get('/leasetype')
    carBrandList = await axios.get('/carbrand/')
    carModalList = await axios.get('/carseries/')
    bestDeals = await axios.get('/carOffer/best-deal')
  } catch (e) {
    console.log(e);
  }

  // Pass data to the page via props
  return {
    props: {
      bannerList: bannerList?.data || null,
      leaseTypeList: leaseTypeList?.data || null,
      carBrandList: carBrandList?.data || null,
      carModalList: carModalList?.data || null,
      bestDeals: bestDeals?.data || null,

    }
  }
}



// export async function getServerSideProps(context) {
//   return {
//     props: {}, 
//   }
// }

export default Index
