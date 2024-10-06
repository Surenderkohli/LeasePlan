import React, { useState } from 'react'
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

const Home = (data) => {
// console.log(data.apiData, "this is data");
  // console.log(props.data);
  // let data=props.data

  const [activeTab, setActivetab] = useState(0);
  // console.log();
  const handleTabClick = (index) => {
    return (
      setActivetab(index)
    )
  }

  return (
    <>
    
      <Mainlyout>
        {/* {Home slider} */}
        <Homeslider />

        <div>
          <Dropdown dropDownData={data?.apiData}/>
        </div>

        {/* {Box slider} */}

        <Boxslider text='Best Private Leasing Deals For You' />

        {/* Best Service */}

        <div className='flex-row lg:flex justify-between md:py-5 lg:py-0'>
          <div>
            <img className='h-auto  leaseplan-service-img md:w-full' src="/images/left.png" />
          </div>
          <div className='container mx-auto xs:w-4/5 md:w-4/5 lg:w-1/2 m-auto '>
            <div className='mb-4'><h2 className='text-sm md:text-base font-semibold w-[180px] h-[40px] bg-[#F5F5F5] border-0 rounded-lg text-center p-1 '>Best services</h2></div>
            <h1 className='text-xl md:text-3xl m4-3 mb-4 font-bold text-gray-700'>Feel the best experience with our <span className='text-orange-500'>Leaseplan</span> service</h1>
            <List.Listitem data={Data?.homeList} />
            <List.Listitem data={Data?.homeList1} />
            <List.Listitem data={Data?.homeList2} />
          </div>
        </div>


        {/* 7 Easy Steps */}
        <div className=' private-lease-section flex justify-between'>
          <div className='container xs:w-1 lg:w-1/2 m-auto'>
            <h1 className='lg:w-9/12 text-xl md:text-3xl text-gray-700 font-bold px-8 py-9 mx-auto'>Here are the 7 easy steps required to start driving your <span className='text-orange-500'>Private Lease</span> car</h1>
            <Tabs title="Long-Term Private" nexttitle="Flexi Private Lease" index={0} activeTab={activeTab} handleTabClick={handleTabClick} />
          </div>
          <div>
            <img className='private-lease-img h-auto float-right sm:float-right md:w-full' src="/images/right.png" />
          </div>

        </div>
      </Mainlyout>
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://api.leaseplan.dev.client.kloudlite.io/banner/get-banner`)
  // const data = await res?.json()
  const res = await axios.get(`/banner/get-banner`)
  const data = res?.data

  // Pass data to the page via props
  return { props: { data } }
}


export default Home