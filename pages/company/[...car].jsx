import React, { useCallback, useEffect, useState } from 'react'
import Search from '../../components/atoms/search'
import Button from '../../components/atoms/button';
import { Mainbody, SectionLayout, Mainheaderlayout } from '../../components/organism/Maincomponent/mainlyout';
import BoxGrid from '../../components/atoms/box';
import Mobilefilter from '../../components/atoms/mobilefilter';
import Cardetails from '../../components/atoms/cardetails';
import Carallimage from '../test';
// import axios from '../../utils/backendAxios'
// import Lottie from 'react-lottie';
// import Lottie from "lottie-react";
import carrunning from "../../public/icons/carrunning.json"
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
// import axios from 'axios';
import axios from '../../utils/backendAxios'
// import RangeSlider from '../../components/atoms/priceRange';
import PriceRange from '../../components/atoms/priceRange';
import DualRange from '../../components/atoms/dualRange';
import PriceModal from '../../components/atoms/priceModal';

import { useRef } from 'react';
import "react-range-slider-input/dist/style.css";
import Image from 'next/image';
import FilterSelect from '../../components/atoms/filterSelect';
import RangeSlider from '../../components/atoms/rangeSlider';
import { RiDeleteBin5Line } from "react-icons/ri";
import MobileFilterV2 from '../../components/atoms/mobileFilterV2';
import Loader from '../../components/atoms/loader';
// import Lottie from 'lottie-web';


const sidebarFilter = {
  priceFilter: [
    { id: 'p1', name: 'Price', label: "DHS 0- DHS 250", value: '1000', },
    { id: 'p2', name: 'Price', label: "DHS 250- DHS 350", value: '2000' },
    { id: 'p3', name: 'Price', label: "DHS 350- DHS 500", value: '3000' },
    { id: 'p4', name: 'Price', label: "MDHS 500 +", value: '4000' }
  ],
  mileageFilter: [
    { id: 'm1', name: 'Mileage', label: '10,000 kms', value: '10000' },
    { id: 'm2', name: 'Mileage', label: '12,000 kms', value: '12000' },
    { id: 'm3', name: 'Mileage', label: '15,000 kms', value: '15000' },
    { id: 'm4', name: 'Mileage', label: '20,000 kms', value: '20000' },
    { id: 'm5', name: 'Mileage', label: '25,000 kms', value: '25000' },
    { id: 'm6', name: 'Mileage', label: '30,000 kms', value: '30000' },
    { id: 'm7', name: 'Mileage', label: '35,000 kms', value: '35000' },
    { id: 'm8', name: 'Mileage', label: '40,000 kms', value: '40000' },
    { id: 'm9', name: 'Mileage', label: '45,000 kms', value: '45000' },
    { id: 'm10', name: 'Mileage', label: '50,000 kms', value: '50000' }

  ],
  bodyFilter: [
    { id: 'b1', name: 'Body', label: 'City-car', value: 'city-car' },
    { id: 'b2', name: 'Body', label: 'Coupe', value: 'coupe' },
    { id: 'b3', name: 'Body', label: 'Estate', value: 'estate' },
    { id: 'b4', name: 'Body', label: 'Sedan', value: 'sedan' },
    { id: 'b5', name: 'Body', label: 'Hatchback', value: 'hatchback' },
    { id: 'b6', name: 'Body', label: 'MPV', value: 'mpv' },
    { id: 'b7', name: 'Body', label: 'Saloon', value: 'saloon' },
    { id: 'b8', name: 'Body', label: 'Sports', value: 'sports' }


  ],
  fuelFilter: [
    { id: 'f1', name: 'Fuel', label: 'Petrol', value: 'petrol' },
    { id: 'f2', name: 'Fuel', label: 'Diesel', value: 'diesel' },
    { id: 'f3', name: 'Fuel', label: 'Hybrid', value: 'hybrid' },
    { id: 'f4', name: 'Fuel', label: 'Electric', value: 'electric' }


  ]
}

const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]



const product = {

  priceFilter: [
    { price_id: '', name: 'DHS 0- DHS 250', value: '100000', inStock: true },
    { price_id: '', name: 'DHS 250- DHS 350', value: '700000', inStock: true },
    { price_id: '', name: 'DHS 350- DHS 500', value: '800000', inStock: true },
    { price_id: '', name: 'MDHS 500 +', value: '1000000', inStock: true }

  ],
  mileageFilter: [
    { mileage_id: '', name: '10,000 kms', value: '1000', inStock: true },
    { mileage_id: '', name: '12,000 kms', value: '2000', inStock: true },
    { mileage_id: '', name: '15,000 kms', value: '4000', inStock: true },
    { mileage_id: '', name: '20,000 kms', value: '6000', inStock: true },
    { mileage_id: '', name: '25,000 kms', value: '8000', inStock: true },
    { mileage_id: '', name: '30,000 kms', value: '10000', inStock: true },
    { mileage_id: '', name: '35,000 kms', value: '12000', inStock: true },
    { mileage_id: '', name: '40,000 kms', value: '14000', inStock: true },
    { mileage_id: '', name: '45,000 kms', value: '16000', inStock: true },
    { mileage_id: '', name: '50,000 kms', value: '18000', inStock: true }

  ],
  bodyFilter: [
    { name: 'City-Car', value: 'city-car', inStock: true },
    { name: 'Coupe', value: 'coupe', inStock: true },
    { name: 'Estate', value: 'estate', inStock: true },
    { name: 'Sedan', value: 'sedan', inStock: true },
    { name: 'Hatchback', value: 'hatchback', inStock: true },
    { name: 'MPV', value: 'mpv', inStock: true },
    { name: 'Saloon', value: 'saloon', inStock: true },
    { name: 'Sports', value: 'sports', inStock: true }


  ],
  fuelFilter: [
    { name: 'Petrol', value: 'petrol', inStock: true },
    { name: 'Diesel', value: 'diesel', inStock: true },
    { name: 'Hybrid', value: 'hybrid', inStock: true },
    { name: 'Electric', value: 'electric', inStock: true }


  ]

}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const NotFound = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: carrunning,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return <>

    <Mainbody>

      <div className='block '>
        {/* <Lottie
            options={defaultOptions}
            style={{ maxWidth: "280px" }}
          /> */}
        {/* <Lottie animationData={carrunning} style={{ maxWidth: "280px", margin: 'auto' }} />
          {/* <Lottie  options={defaultOptions} style={{ maxWidth: "280px", margin:'auto'}}/> */}
        {/* <p className='text-center text-2xl text-orange-500'>Sorry! Car Not found in Inventry.</p>  */}
        <Image src={'/images/Car_Error.svg'} width={600} height={600} className='mx-auto' />

      </div>


    </Mainbody>

  </>
}


const ScrollableDiv = ({ children }) => {
  return (
    <div style={{ overflowY: 'scroll', height: '100%' }}>
      {children}
    </div>
  );
};

const Company = ({ carfilter, car }) => {
  // console.log(car, "carrrrrrrrrrrrrr");
  const [leaseType, leaseTerm, selectMake, selectseries] = car
  const [carName, setCarName] = useState(selectMake)
  const [finalName, setFinalName] = useState()
  const [makename, setMakename] = [carfilter?.data[0]?.carBrand_id?.companyName]
  const [prefilterData, setPreFilterData] = useState(car)
  const [priceData, setPriceData] = useState()
  const [loading, setLoading] = useState(false)


  const [carList, setcarList] = useState(carfilter?.data)
  const [background, setBackground] = useState('')

  const [filter, setFilter] = useState({
    Price: "",
    Mileage: "",
    Body: "",
    Fuel: "",
  })
  const [sidefilter, setSideFilter] = useState({
    Price: " ",
    Mileage: " ",
    Body: " ",
    Fuel: " ",
  })


  const [selected, setSelected] = useState({
    Body: {
      id: "",
      value: ""
    },
    Mileage: {
      id: "",
      value: ""
    }
  })


  const [filtersbymob, setfiltersbymob] = useState(false)
  const [selectedPrice, setSelectedPrice] = useState()

  const [selectedmileage, setSelectedmileage] = useState()
  const [selectedBody, setSelectedBody] = useState()
  const [selectedFuel, setSelectedFuel] = useState()
  const [selectActive, setselectActive] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [querryCarSearch, setquerryCarSearch] = useState()
  const [text, settext] = useState('')
  const [showbackground, setShowBackground] = useState(true)
  const [showbackgroundFilter, setShowBackgroundFilter] = useState(true)
  const [showHeader, setShowHeader] = useState(true)


  let arr2 = ''
  const mileageSelectRef = useRef(null);
  const bodyTypeRef = useRef(null);
  const manualsearch = useRef(null);


  useEffect(() => {
    const modelname = async () => {
      if (carName) {
        try {
          const carDetailsResponse = await axios.get(`/carOffer/filter-cars?carBrand_id=${carName}`);
          const carDetails = carDetailsResponse.data;

          // Handle carDetails as needed
          setFinalName(carDetails.data[0].carBrand_id.companyName)
          // console.log(carDetails.data[0].carBrand_id.companyName, "Car Details");
        } catch (error) {
          console.error("Error fetching car details:", error);
        }
      }
    };

    modelname(); // Call the function within useEffect

  }, [carName]);


  const handleChangescrollHeader = () => {
    if (window.scrollY >= 30) {
      setShowHeader(false)
    }
    else {
      setShowHeader(true)
    }
  }


  const handleChangescroll_filter = () => {
    if (window.scrollY >= 180) {
      setShowBackgroundFilter(false)
    }
    else {
      setShowBackgroundFilter(true)
    }
  }

  const handleChangescroll = () => {
    if (window.scrollY >= 80) {
      setShowBackground(false)
    }
    else {
      setShowBackground(true)
    }
  }

  const resetAll = () => {
    // setFilter('')
    setFilter({
      Price: "",
      Mileage: "",
      Body: "",
      Fuel: "",
    })
    setSelected(({
      Body: {
        id: "",
        value: ""
      },
      Mileage: {
        id: "",
        value: ""
      }
    }))
    setPriceData('')
    // mileageSelectRef.current.value = '';
    // bodyTypeRef.current.value = '';
    // manualsearch.current.value = '';
    setquerryCarSearch('');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleChangescroll)
    window.addEventListener('scroll', handleChangescroll_filter)
    window.addEventListener('scroll', handleChangescrollHeader)
  })

  // const handleCheckboxChange = (e, id, value) => {
  //   console.log(e.target.value, 'event', value)
  //   console.log(id)
  //   name = e.target.name

  //   if (selected === id) {
  //     // alert('remove')
  //     setSelected("")
  //     setBackground('')
  //     // setSideFilter({...sidefilter,[name]:''})
  //     setFilter({ ...filter, [name]: '' })
  //     setselectActive(!selectActive);
  //   }
  //   else {
  //     // alert('add')
  //     setSelected(id)
  //     setBackground('bg-orange-500')
  //     setFilter({ ...filter, [name]: value })
  //     setselectActive(!selectActive);
  //     // setSideFilter({...sidefilter,[name]:value})
  //   }
  // };
  // console.log('selected.Body.id-', selected);
  const handleTopFilter = (e, v, id) => {
    // console.log(id, "sfddsfdsfdsdfsds");
    const name = e.target.name;
    const value = e.target.value ? e.target.value : v

    // console.log(id, name, v, "hghghghghghghg");
    if (selected[name]?.id === id) {
      // alert('remove')
      setSelected((prevSelected) => ({
        ...prevSelected,
        [name]: {
          ...prevSelected[name],
          id: '',
        },
      }));

      // setFilter({ ...filter, [name]: '' })
      setFilter((prevFilter) => ({
        ...prevFilter,
        [name]: '',
      }));

    }
    else {
      // alert('add')
      setSelected((prevSelected) => ({
        ...prevSelected,
        [name]: {
          ...prevSelected[name],
          id: id,
        },
      }));

      setFilter({ ...filter, [name]: value })


    }
  }

  // const showFilter = () => {
  //   setfiltersbymob(true)

  // }
  const handleSelectmileage = useCallback((e) => {
    console.log(e);
    setSelectedmileage(e)
    setFilter({ ...filter, Mileage: e })
    // console.log(e.target.value)

  },)

  const handleSelectFuel = (e) => {
    console.log(e);
    setFilter({ ...filter, Fuel: e.toLowerCase() })
  }

  const applyFilter = useCallback(async (e) => {
    const params = { priceMax: `${filter?.Price}`, annualMileage: `${filter?.Mileage}` }
    // const searchParams=new URLSearchParams(params);
    const URL = `/cardetails?${filter?.Price ? `&priceMax=${filter?.Price}` : ''}${filter?.Mileage ? `&annualMileage=${filter?.Mileage}` : ''}${filter?.Body ? `&bodyType=${filter?.Body}` : ''}${filter?.Fuel ? `&fuelType=${filter?.Fuel}` : ''}${leaseType_id ? `&leaseType=${leaseType_id}` : ''}${carBrand_id ? `&carBrand=${carBrand_id}` : ''}${carSeries_id ? `&carSeries=${carSeries_id}` : ''}`

    let decoded = decodeURI(URL)
    let a = decoded.split(" ").join("")

    // console.log(a, ".........");
    e.preventDefault()
    try {
      const res = await axios.get(a)
      // console.log(res)
      const filteredData = res.data
      setcarList(filteredData.data)

    } catch (er) {
      console.log(er?.response.data.message, 'err');
    }
  })

  let searchTimeout;

  const applySearch = useCallback(async (searchvalue) => {

    // console.log(searchvalue);
    // console.log(searchvalue, "search function call");
    setLoading(true)
    setquerryCarSearch(searchvalue)

    const URL = `/carOffer/filter-cars?${searchvalue ? `querySearch=${searchvalue}` : ''}${leaseType ? `&leaseType=${leaseType}` : ''}${leaseTerm ? `&term=${leaseTerm}` : ''}${selectMake ? `&carBrand_id=${selectMake}` : ''}${selectseries ? `&carSeries_id=${selectseries}` : ''}${filter?.Price ? `&priceMax=${filter?.Price}` : ''}${filter?.Mileage ? `&annualMileage=${filter?.Mileage}` : ''}${filter?.Body ? `&bodyType=${filter?.Body}` : ''}${filter?.Fuel ? `&fuelType=${filter?.Fuel}` : ''}`
    // console.log(URL, "urlllllllllll");
    let decoded = decodeURI(URL)
    let a = decoded.split(" ").join("")
    // console.log(a, "urlnjnjnnjkjkjkjkjkkj");
    try{
    const res = await axios.get(URL)
    // console.log(res?.data?.data, "search response");
    const searchResult = res?.data?.data
    setcarList(searchResult)
    }catch(e){
      console.log(er?.response.data.message, 'err');
    }finally {
      setLoading(false);
    }

  })

  const throttledApplySearch = useCallback((searchValue) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    searchTimeout = setTimeout(() => {
      applySearch(searchValue);
    }, 1000);
  }, [applySearch]);



  const handlecarDetail = (e) => {
    // console.log(e, "cardetails  ............button");
  }
  const handleDeselect = (e) => {
    // console.log(e, "deselect");
    // name = e.target.name
    setFilter({ ...filter, [e]: " " })
    setselectActive(!selectActive);
    // console.log(e.target.value,"deselect........");

  }
  const handleSideFilter = async (e) => {

    const URL = `/carOffer/filter-cars?${querryCarSearch ? `querySearch=${querryCarSearch}` : ''}${leaseType ? `&leaseType=${leaseType}` : ''}${leaseTerm ? `&term=${leaseTerm}` : ''}${selectMake ? `&carBrand_id=${selectMake}` : ''}${selectseries ? `&carSeries_id=${selectseries}` : ''}${filter?.PriceMin ? `&priceMin=${filter?.PriceMin}` : ''}${filter?.PriceMax ? `&priceMax=${filter?.PriceMax}` : ''}${filter?.Mileage ? `&annualMileage=${filter?.Mileage}` : ''}${filter?.Body ? `&bodyType=${filter?.Body}` : ''}${filter?.Fuel ? `&fuelType=${filter?.Fuel}` : ''}`

    // console.log(URL, "urlllllllllllsacasa");
    const res = await axios.get(URL)



    setcarList(res?.data?.data)
  }


  useEffect(() => {
    handleSideFilter()


  }, [filter])




  const keys = Object.keys(filter)
  // console.log(keys);

  let arr = []
  keys.forEach((key, index) => {
    let obj = {}
    if (filter[key] !== ' ') {
      obj[`${key}`] = `${filter[key]}`
      arr.push(obj)
    }
    // console.log(${key}: ${courses[key]});
  })
  // console.log(selectActive);
  // console.log(arr, "arrrrrrrrr")
  // console.log(filter, "filter");
  // console.log(background);
  useEffect(() => {
    if (priceData) {
      setFilter({ ...filter, PriceMin: priceData[0], PriceMax: priceData[1] })
    }
    else {
      setFilter({ ...filter, PriceMin: '', PriceMax: '' })
    }

  }, [priceData])
  // console.log(priceData, "priceData");
  return (
    <>
      <div>
        <Mainheaderlayout showHeader={showHeader} navHide={true}>
          {/* <Mainbody> */}
          {/* <div className={`${showbackgroundFilter ? 'mt-[65px]' : 'mt-[65px]'}  `}> */}

          <div className={`mt-[65px] relative `}>
            {/* <div className={`${showbackground ? 'static lg:top-[84px] top-[64px] pb-[15px] z-[9]' : 'fixed top-0 pb-[15px]  z-[9] transition-opacity duration-300 ease-in'}  w-full  left-0  bg-[#e7eef1]`}> */}


            <div className={`sticky top-0 bg-[#e7eef1] pb-[15px] z-[9]`}>
              {/* <div className={`transition-all duration-300 ease-in w-full left-0 bg-[#e7eef1] transform translateZ(0) ${showbackground ? 'static lg:top-[84px] top-[64px] searchBar_section' : 'fixed top-0 pb-[15px] px-[14%] z-[9]'}`}> */}
              {/* Your content */}


              {/* <div> <h2 className={`${showbackground ? 'block ' : 'hidden'} text-lg w-auto h-[0px] md:text-xl text-[#494646] font-bold`}>Our Inventory</h2></div> */}
              <div className='container mx-auto px-5 md:block flex justify-between'>

                <div className="text-[12px] text-gray-500 relative top-5 flex justify-start px-5 font-normal pb-2 ">
                  {leaseType && <span>{`Showing results of ${leaseType}`}</span>}
                  {leaseType && leaseTerm && <span> / </span>}
                  {leaseTerm && <span>{`${leaseTerm}`}</span>}
                  {(leaseType || leaseTerm) && finalName && <span> / </span>}
                  {finalName && <span>{`${finalName}`}</span>}
                </div>
                <div className={` md:flex gap-x-1 items-center mt-4 justify-between  hidden`}>
                  <div className='flex gap-x-1 items-center'>
                    <FilterSelect data={sidebarFilter?.mileageFilter} label={'Mileage'} onClick={handleTopFilter} selectedFilter={filter?.Mileage && filter !== ''} optionSelect={filter?.Mileage} />
                    <FilterSelect data={sidebarFilter?.bodyFilter} label={'Body'} onClick={handleTopFilter} selectedFilter={filter?.Body && filter !== ''} optionSelect={filter?.Body} />
                    <RangeSlider.DualRangeSlider priceRangeSelect={(e) => setPriceData(e)} selectedFilter={filter?.PriceMax && filter?.PriceMin !== ''} optionSelect={{ PriceMin: filter?.PriceMin, PriceMax: filter?.PriceMax }} />
                    {/* <div className={`w-12 h-8 rounded-[50px]  flex items-center justify-center ${filter?.Mileage||filter?.Body||filter?.PriceMax?'bg-white shadow-md':'bg-[#eeeeee] border border-[#d0cfcf] shadow-md'}`}> */}
                    <button className={`w-12 h-8 rounded-[50px]  flex items-center justify-center ${filter?.Mileage || filter?.Body || filter?.PriceMax ? 'bg-white shadow-md' : 'bg-[#eeeeee] border border-[#d0cfcf] shadow-md'}`} disabled={filter?.Mileage || filter?.Body || filter?.PriceMax ? false : true} onClick={resetAll}><RiDeleteBin5Line className={`${filter?.Mileage || filter?.Body || filter?.PriceMax ? 'text-[#034a5e] ' : 'text-[#989a9a] '}`} /></button>
                    {/* <RiDeleteBin5Line  className={`${filter?.Mileage||filter?.Body||filter?.PriceMax?'text-[#034a5e] cursor-pointer':'text-[#989a9a] cursor-not-allowed'}`} onClick={resetAll}/> */}

                    {/* </div> */}
                  </div>

                  <div className='lg:w-1/2 w-1/3'><Search applySearch={throttledApplySearch} manualsearch={manualsearch} /></div>


                </div>


                <div className='flex justify-between items-center lg:mt-0 mt-5 md:hidden'>

                  {/* <div className='flex  flex-col lg:flex-row hidden'>

                    {
                      arr.map((value, i) => {
                        for(let x in value){
                          console.log(value[x]);
                        }
                        let showkey;
                        let showvalue;
                        for (const [key, val] of Object.entries(value)) {
                          showkey = key;
                          showvalue = val;
                          // console.log(key, val);
                        }
                        // console.log(value,'value.....filllll....',showkey,showvalue)

                        return (<>
                          {
                            showvalue && <div className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded inline-flex items-center mr-3 mb-2">

                              <span>{showkey}:{showvalue}</span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="fill-current w-5 h-5 ml-2 cursor-pointer" name={showkey} onClick={(e) => handleDeselect(showkey)}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </div>
                          }




                        </>)
                      })
                    }



                  </div> */}

                  {/* <Mobilefilter onChange={handleTopFilter} priceRangeSelect={(e) => setPriceData(e)} /> */}
                  <MobileFilterV2 filterClick={handleTopFilter} priceRangeSelect={(e) => setPriceData(e)} sidebarFilter={sidebarFilter} filter={filter} resetAll={resetAll} />


                </div>
              </div>
            </div>
            {loading && <div className='sticky w-full h-full flex justify-center top-[450px] z-[8]'>
                  <Loader />

                </div>}
            <div className="container mx-auto min-h-[78vh]  px-5 ">


              <div className={`Our Inventry relative`}>
                {/* <h2 className="text-xl text-[#494646] font-bold p-2 mt-12">Our Inventry</h2> */}

                {/* <div className="flex gap-x-6 mt-12 "> */}

                <div className={`w-full ${loading ? 'opacity-30 ' : ''} `}>

                  {/* <div className={`flex flex-wrap ${carList?.length > 3 ? 'justify-start' : 'justify-center'} ${showbackground ? 'pt-6 ' : 'pt-36 '} transition-pt gap-6 `} 
                
                  > */}

                  <div className={`${carList?.length > 3 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]' : 'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-[100px] gap-[30px]'} ${showbackground ? 'pt-6' : 'pt-6'} transition-pt`}>
                    {/* {console.log(carList.length)} */}

                    {
                      carList?.map((car) => {
                        // console.log(car,"carlist");
                        return (
                          <><BoxGrid.BoxGridCard_index
                            image={car?.details?.image[0]?.imageUrl}
                            carname={car?.carBrand_id?.companyName}
                            carmodel={car?.carSeries_id?.seriesName}
                            month={car?.offers[0]?.duration}
                            monthmileage={car?.offers[0]?.annualMileage}
                            cartype={car?.details?.transmission}
                            gas={car?.details?.fuelType}
                            fuel={car?.details?.co2}
                            mileage={car?.details?.tankCapacity}
                            hreflink={`/contact/${car?._id}`}
                            onClick={handlecarDetail}
                            price={`AED ${car?.offers[0]?.monthlyCost}`}
                            cardWidth={`${carList?.length > 3 ? '' : ''}`}

                          /></>
                        )
                      })
                    }


                  </div>
                  {
                    carList.length === 0 && <NotFound />
                  }
                </div>

               

                {/* </div> */}
              </div>
            </div>
          </div>
          {/* </Mainbody> */}
        </Mainheaderlayout>

      </div>
    </>
  )
}



export async function getServerSideProps(context) {
  const { car } = context?.params
  // console.log(car, "jjjjjs")
  const [leaseType, leaseTerm, selectMake, selectseries] = car

  // console.log(car, "jkjkjkjkjkjk")
  // const lease = car[0]
  // const selecteMake = car[1]
  // const selectseries = car[2]

  // const URL = `http://api.leaseplan.dev.client.kloudlite.io/carOffer/filter_cars?${leaseType?`leaseType=${leaseType}':''}${leaseTerm?`&term=${leaseTerm}`:''}${selectMake?`&carBrand_id=${selectMake}`:''}${selectseries?`&carSeries_id=${selectseries}`:''} `   

  const URL = `/carOffer/filter-cars?${leaseType ? `leaseType=${leaseType}` : ''}${leaseTerm ? `&term=${leaseTerm}` : ''}${selectMake ? `&carBrand_id=${selectMake}` : ''}${selectseries ? `&carSeries_id=${selectseries}` : ''}`
  // console.log(URL, "urlllllllllll");



  // let decoded = decodeURI(URL)
  // let a = decoded.split(" ").join("")


  // console.log(a, "tested a")
  const res = await axios.get(URL)
  const carfilter = res?.data
  // console.log(res.data, "company resppppppppp");

  return {
    props: {
      carfilter: carfilter,
      car: car


    }, // will be passed to the page component as props
  }
}
export default Company


export const getServerSidesProps = async (appCtx) => {

  // console.log(appCtx)
  return {
    props: {
      home: "sahjfgkh"
    }
  }
}



