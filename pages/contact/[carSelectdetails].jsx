import React, { useEffect, useState } from 'react'

import { Mainbody, SectionLayout, Mainheaderlayout } from '../../components/organism/Maincomponent/mainlyout';
import Cardetails from '../../components/atoms/cardetails';
import Tabs from '../../components/atoms/tabs';
import Data from '../../components/layout/test.data.json';
import Stepscontainer from "../../components/atoms/stepscontainer"
import Accordion from '../../components/atoms/Accordion';
import Link from 'next/dist/client/link';
import Carallimage from '../test';
import classNames from 'classnames'

import { StyledEngineProvider } from '@mui/material/styles';
import Button from '../../components/atoms/button';

import Title from '../../components/atoms/title';
// import axios from 'axios';
import axios from '../../utils/backendAxios'
import { getFontDefinitionFromNetwork } from 'next/dist/server/font-utils';
import RangeSlider from '../../components/atoms/rangeSlider';
// const carContractDescription = {

//   carContractLenght: [
//     { months: '12' },
//     { months: '24' },
//     { months: '36' },
//     { months: '48' },
//     { months: '60' }
//   ],
//   carAnnualMileage: [
//     { carMileage: '4' },
//     { carMileage: '6' },
//     { carMileage: '8' },
//     { carMileage: '10' },
//     { carMileage: '12' }

//   ]
// }
const CarSelectdetails = ({ carselectResponse }) => {
  // console.log(carselectResponse
  //   , "crdagjvhvjv..........");


  const [selectedOption, setSelectedOption] = useState({
    contractLength: "24 Months",
    Longtermlease: carselectResponse?.carOffer?.term,
    annualMileage: "12,000",
    UpfrontPayment: "4",
    includeMaintenance: "Yes"
  });

  const [contractData, setContractData] = useState({
    contractLength: {
      id: '',
      contractLength: ''
    },
    annualMileage: {
      id: '',
      annualMileage: ''
    }
  })


  // console.log(contractData?.contractLength, "this is a contract")

  const [sortmileage, setSortMileage] = useState()
  const [selectedMileage, setSelectedMileage] = useState()
  const [selectedDuration, setSelectedDuration] = useState()
  const [rangeSelectnumber, setRangeSelectNumber] = useState()
  const [combinationValueDuration, setCombinationValueDuration] = useState()
  const [combinationValueMileage, setCombinationValueMileage] = useState()
  const [selectedOffers, setSelectedOffers] = useState();
  const [marginTop, setMarginTop] = useState(57);
  const [monthlycost, setMonthlyCost] = useState('')
  const [newDefaultValue, setNewDefaultValue] = useState()
  const [defaultValue1, setDefaultValue1] = useState()
  const [defaultValue2, setDefaultValue2] = useState()
  const className = 'bg-orange-500'
  const back = 'bg-orange-500'

  const tabs = [
    {
      title: "Standard Equipment",
      content: [
        {
          title: "Exterior Features",
          content: ["Accordion content goes here", "some title goes here", "more text"]


        },
        {
          title: "Interior Features",
          content: ["Accordion content goes here", "some title goes here"]
        },
        {
          title: "Entertainment",
          content: ["Accordion content goes here", "some title goes here"]
        },
        {
          title: "Safety Features",
          content: ["Accordion content goes here", "some title goes here"]
        },
        {
          title: "Driver Convenience",
          content: ["Accordion content goes here", "some title goes here"]
        },
        {
          title: "Security",
          content: ["Accordion content goes here", "some title goes here"]
        },

      ],
    },


  ];
  // console.log(selectedOffers, "This is check")



  // range slider****
  // console.log(carselectResponse?.carOffer?.offers,"result");
  const finalduration = new Set(carselectResponse?.carOffer?.offers.map((value) => value?.duration))
  const finalMileage = new Set(carselectResponse?.carOffer?.offers.map((value) => value?.annualMileage
  ))

  const Uniqueduration = Array.from(finalduration)
  const UniqueMileage = Array.from(finalMileage)

  const sortedUniqueduration = Uniqueduration?.sort((a, b) => a - b);
  const sortedUniqueMileage = UniqueMileage?.sort((a, b) => a - b);

  const convertedDurationArray = sortedUniqueduration?.map(value => ({ value }));
  const convertedMileageArray = sortedUniqueMileage?.map(value => ({ value }));
  // console.log(convertedDurationArray,'converted',convertedMileageArray);
  let bydefaultvalue
  // console.log(convertedMileageArray);
  const finaldataShow = (carselectResponse?.carOffer?.offers.map((value) => value))

  // function findMaxValueByType(type, numberselect) {
  //   const matchingValues = carselectResponse?.carOffer?.offers.filter(item => (type === 'duration' ? item.duration : item.annualMileage) === numberselect)
  //       .map(item => (type === 'duration' ? item.annualMileage : item.duration));

  //   const maxResult = matchingValues.length > 0 ? Math.max(...matchingValues) : null;

  //   console.log(
  //       `Found maximum ${type === 'duration' ? 'mileage' : 'duration'} for ${
  //           type === 'duration' ? 'duration' : 'mileage'
  //       } ${numberselect}:`,
  //       maxResult
  //   );

  //   return maxResult;
  // }


  // console.log(finaldataShow);

  const fetchContractPrice = async () => {
    // console.log(selectedDuration, "fun call", selectedMileage, 'newvalue----', rangeSelectnumber);


    const maxMileageForDuration48 = findMaxValueByType(rangeSelectnumber?.type, rangeSelectnumber?.newValue);
    if (maxMileageForDuration48 !== null) {
      // console.log('maxMileageForDuration48', maxMileageForDuration48);
      rangeSelectnumber?.type === 'duration' ? setCombinationValueMileage({ type: rangeSelectnumber?.type, maxMileageForDuration48 }) : setCombinationValueDuration({ type: rangeSelectnumber?.type, maxMileageForDuration48 })
      // setCombinationValueDuration({type:rangeSelectnumber?.type,maxMileageForDuration48})
      // setCombinationValueMileage({type:rangeSelectnumber?.type,maxMileageForDuration48})
    }
    // console.log(maxMileageForDuration48, 'hurrehh...');


    // try {
    //   const responsenext = await axios.get(`/carOffer/fetch-single/${carselectResponse?.carOffer?._id}?duration=${selectedDuration}&annualMileage=${selectedMileage}`)
    //   // console.log(responsenext?.data?.data?.monthlyCost, "this is annualmileage")
    //   // setSortMileage(responsenext?.data?.data?.availableMileages)


    //   // console.log(contractData.annualMileage.annualMileage, "this is annual mileage")
    //   // console.log(response?.data?.data?.monthlyCost, "this is cost")
    //   setMonthlyCost(responsenext?.data?.data?.monthlyCost)

    // } catch (e) {
    //   // console.log(e?.response.status)

    //   if (e?.response?.status == '404') {
    //     //  console.log('nnnnnnnnn')
    //     setMonthlyCost('')
    //   }
    // }
  }
  useEffect(() => {

  }, [selectedMileage,])


  // useEffect(()=>{

  //   if(selectedMileage){
  //     // console.log(selectedMileage,'milega')
  //     try{
  //       (async()=>{
  //         const response = await axios.get(`/carOffer/fetch-single/${carselectResponse?.carOffer?._id}?duration=${contractData?.contractLength.contractLength}&annualMileage=${selectedMileage}`)
  //         console.log(response, "price")
  //         setMonthlyCost(response?.data?.data?.monthlyCost)
  //       })()
  //     } catch(e){
  //       console.log(e?.response?.status,"use eff 1");
  //       if (e?.response?.status == '404') {
  //         setMonthlyCost('')
  //       }
  //     }

  //   }else if(carselectResponse?.carOffer?.term == 'Short Term'){
  //     try{
  //       (async()=>{
  //         const response = await axios.get(`/carOffer/fetch-single/${carselectResponse?.carOffer?._id}?duration=${contractData?.contractLength.contractLength}&annualMileage=${sortmileage}`)
  //         console.log(response, "price")
  //         setMonthlyCost(response?.data?.data?.monthlyCost)
  //       })()
  //     } catch(e){
  //       console.log(e.response.status,"use eff 2");
  //       if (e?.response?.status == '404') {
  //         setMonthlyCost('')
  //       }
  //     }
  //   }

  // },[selectedMileage, sortmileage])

  useEffect(() => {

  }, [])



  useEffect(() => {
    if (carselectResponse?.carOffer?.term == "Short Term") {
      const data = carselectResponse?.carOffer?.offers
      const convertedDuration = convertedDurationArray && convertedDurationArray[0]?.value
      const convertedMileage = convertedMileageArray && convertedMileageArray[0]?.value
      const exactMatch = data?.find((item) => item?.duration === convertedDuration)
      setSelectedDuration(convertedDurationArray && convertedDurationArray[0]?.value)
      // setSelectedMileage(convertedMileageArray && convertedMileageArray[0]?.value)
      // setDefaultValue1(convertedDurationArray && convertedDurationArray[0]?.value)
      // setDefaultValue2(convertedMileageArray && convertedMileageArray[0]?.value)
      setNewDefaultValue(exactMatch?.annualMileage)
      // console.log(bydefaultvalue,'defdaef')
      setMonthlyCost(exactMatch?.monthlyCost)
      setSelectedMileage(exactMatch?.annualMileage)
    }

    else if (carselectResponse?.carOffer?.term === "Long Term") {
      // console.log(convertedDurationArray && convertedDurationArray[convertedDurationArray?.length - 1]?.value, 'kjjj');
      const data = carselectResponse?.carOffer?.offers
      const convertedDuration = convertedDurationArray && convertedDurationArray[convertedDurationArray?.length - 1]?.value
      const convertedMileage = convertedMileageArray && convertedMileageArray[0]?.value
      // console.log(data?.find((item) => item?.duration === convertedDuration && item.annualMileage === convertedMileage));

      // console.log(convertedDurationArray && convertedDurationArray[convertedDurationArray?.length - 1]?.value, convertedMileageArray && convertedMileageArray[0]?.value);
      //  setDefaultValue1(convertedDurationArray && convertedDurationArray[convertedDurationArray?.length - 1]?.value)
      setSelectedDuration(convertedDurationArray && convertedDurationArray[convertedDurationArray?.length - 1]?.value)
      // setSelectedMileage(convertedMileageArray && convertedMileageArray[0]?.value)


      const exactMatch = data?.find((item) => item?.duration === convertedDuration)
      // console.log(exactMatch, 'sllllllllll');
      setNewDefaultValue(exactMatch?.annualMileage)
      // bydefaultvalue=exactMatch?.annualMileage

      setMonthlyCost(exactMatch?.monthlyCost)
      setSelectedMileage(exactMatch?.annualMileage)
      // setDefaultValue2(convertedMileageArray && convertedMileageArray[0]?.value)

    }

  }, [])




  // useEffect(() => {



  //   if (selectedMileage !== '' && selectedMileage !== undefined) {
  //     console.log(selectedMileage, selectedDuration)
  //     fetchContractPrice()
  //     // setSelectedMileage(contractData?.annualMileage?.annualMileage)
  //     // setSelectedDuration(contractData?.contractLength?.contractLength)

  //   }


  // }, [selectedDuration, selectedMileage])

  const resp = carselectResponse?.carFeatures?.categories?.map((item) => {
    return { title: item?.categoryDescription, content: item?.features?.map((features) => features) }
  })
  // console.log(selectedOption.contractLength, "jjjjjj")
  const result = tabs.map((item) => {
    return { title: item?.title, content: resp }
  })




  const findData = (e, duration, mileage, offers) => {
    // Your logic here

    if (e === 'duration') {
      const exactMatch = offers.find(
        (deal) => deal.duration === duration && deal.annualMileage === mileage

      );
      setMonthlyCost(exactMatch?.monthlyCost)

      if (!exactMatch) {
        const out = offers.filter(item => item.duration === duration)
        // .map(item =>item.durations);

        const maxResult = out.length > 0 ? out.reduce((max, current) => {
          return current.annualMileage > max.annualMileage ? current : max;
        }) : null;

        setDefaultValue2(maxResult.annualMileage)

        setDefaultValue1(duration)
        setSelectedDuration(duration)
        setSelectedMileage(maxResult.annualMileage)
        setMonthlyCost(maxResult.monthlyCost)

      }
      else {
        setDefaultValue1(duration)

      }
    }
    else {

      const exactMatch = offers.find(
        (deal) => deal.duration === duration && deal.annualMileage === mileage
      );
      setMonthlyCost(exactMatch?.monthlyCost)

      if (!exactMatch) {
        const out = offers.filter(item => item.annualMileage === mileage)

        const maxResult = out.length > 0 ? out.reduce((max, current) => {
          return current.duration > max.duration ? current : max;
        }) : null;

        setDefaultValue1(maxResult.duration)

        setDefaultValue2(mileage)
        setSelectedMileage(mileage)
        setSelectedDuration(maxResult.duration)
        setMonthlyCost(maxResult.monthlyCost)



      }
      else {
        setDefaultValue2(mileage)

      }

    }
  };



  const getDefault = (e, value) => {
    // setNewDefaultValue(15000)
    setSelectedDuration(value)

    findData(e, value, selectedMileage, carselectResponse?.carOffer?.offers)




  }
  const getDefault2 = (e, value) => {
    // setNewDefaultValue(15000)

    setSelectedMileage(value)

    findData(e, selectedDuration, value, carselectResponse?.carOffer?.offers)





  }


  return (
    <>

      <Mainheaderlayout>
        <Mainbody>
          <SectionLayout className={'lg:pt-36 md:pt-24 pt-24 '}>

            <div className="flex md:flex-row flex-col gap-4 lg:gap-5 ">
              {/* <div className="w-full  md:w-8/12 xl:w-[874px]  h-full " style={{ background: "linear-gradient(276.68deg, rgba(234, 123, 0, 0.08) 14.71%, rgba(230, 64, 25, 0.08) 98.27%) ", borderRadius: "18px" }}> */}
              <div className="w-full md:w-[60%] lg:w-[65%]  h-full" >

                <div className='w-full '>
                  <Carallimage carselectResponse={carselectResponse} />
                </div>

                <Cardetails
                  carname={carselectResponse?.carOffer?.carBrand_id?.companyName}
                  carseries={carselectResponse?.carOffer?.carSeries_id?.seriesName}
                  cardetails={carselectResponse?.carDetails?.description}
                  cartype={carselectResponse?.carDetails?.transmission}
                  gas='40/nji'
                  fuel={carselectResponse?.carDetails?.fuelType}
                  mileage={carselectResponse?.carOffer?.offers[0]?.annualMileage}
                  doors={carselectResponse?.carDetails?.door}
                  seat={carselectResponse?.carDetails?.seat}

                  maintain='YES'
                  morecontent='Proin auctor urna et urna tincidunt, vel sagittis magna blandit.
                   Nam eleifend euismod mauris a tincidunt. Curabitur interdum orci
                   eget euismod faucibus. Nullam tempus quis lacus id finibus.
                   Aliquam erat volutpat. Nulla euismod odio non justo feugiat
                   ullamcorper. Nunc auctor velit vel bibendum posuere.'
                />
              </div>
              <div className="w-full md:w-[40%] lg:w-[35%] h-full sticky lg:top-[100px] top-[80px]  ">
                <div className="bg-white border border-slate-100 shadow-lg rounded-xl flex flex-col items-center lg:px-10 md:px-5 px-8 py-8 ">

                  <div className="flex flex-col w-full">
                    {monthlycost ? <><h2 className='text-[40px] font-bold text-[#02485C] leading-10  whitespace-nowrap'>AED {monthlycost}</h2>
                      <p className='text-sm font-normal text-[#02485C] whitespace-nowrap'>per month (incl.VAT)</p></> : <h2 className='text-[40px] font-bold text-[#02485C] pt-[26px]'>No offers found</h2>}



                  </div>


                  {/* <div className="flex mt-8 flex-col w-[80%] lg:w-52 xl:w-64 mb-4">
                    <label className="text-base md:text-lg font-bold">Term Type</label>
                    <div className="mt-2 flex lease_term_btn">
                      <label className="w-full h-[50px] bg-[#F4F4F4] text-[#494646] rounded-l-lg rounded-r-lg text-base lg:text-lg px-2 font-semibold flex justify-center  items-center">
                        <button
                          type="radio"
                          name="Longtermlease"
                          value="Long Term Lease"
                       
                          {...selectedOption.contractLength === '24 months' ? 'bg-orange-300' : ''}

                          // onClick={handleCheckboxChange}
                          // onChange={handleOptionChange}
                          className="bg-[#02485C] font-semibold text-base lg:text-lg"
                        />
                        {carselectResponse?.carOffer?.term}

                      </label>

                    </div>
                  </div> */}
                  <div className="flex flex-col w-full lg:mt-6 mt-4">
                    <div className='flex justify-between items-center'>
                      <label className="text-sm text-[#2d2d2d] font-bold">Duration</label>
                      <p className='text-sm font-normal text-[#2d2d2d]'>{selectedDuration} months</p>
                    </div>
                    <div className="lg:mt-2 flex  flex-wrap gap-2 dynamicRangeSelect">

                      <StyledEngineProvider>
                        <RangeSlider setSelectedDuration={setSelectedDuration} marks={convertedDurationArray} defaultValue={convertedDurationArray && convertedDurationArray[convertedDurationArray?.length - 1]?.value} type={'duration'} setRangeSelectNumber={setRangeSelectNumber} combinationValue={combinationValueDuration} getDefault={getDefault} Value={defaultValue1} disabled={false} />
                      </StyledEngineProvider>



                    </div>
                  </div>
                  <div className="flex flex-col w-full  lg:mt-6 mt-4">
                    <div className='flex justify-between items-center'>
                      <label className="text-sm text-[#2d2d2d] font-bold ">Kilometers p.a.</label>
                      <p className='text-sm font-normal text-[#2d2d2d]'>{selectedMileage} km</p>
                    </div>
              
                    <div className="lg:mt-2 flex flex-wrap gap-2 dynamicRangeSelect">
                      {
                        newDefaultValue && <StyledEngineProvider>

                          <RangeSlider setSelectedDuration={setSelectedMileage} marks={convertedMileageArray} defaultValue={newDefaultValue} type={'mileage'} setRangeSelectNumber={setRangeSelectNumber} combinationValue={combinationValueMileage} newDefaultValue={newDefaultValue} getDefault={getDefault2} Value={defaultValue2} disabled={true} />
                        </StyledEngineProvider>

                      }

                    </div>
                  
                  </div>



                  <div className="flex flex-col w-full">
                    {/* <label className="text-sm lg:text-base font-medium">Include Maintenance:</label> */}

                    <div>

                      <h2 className='font-bold  text-lg text-[#757575] text-bold'>Summary</h2>
                      <div className='flex xl:flex-row md:flex-col justify-between mt-3'>
                        <label className='text-sm text-[#2d2d2d] font-bold'>
                          Contract Type:
                        </label>
                        <div className='text-sm font-normal text-[#2d2d2d]'>
                          {carselectResponse?.carOffer?.term}
                        </div>
                      </div>
                      <div className='flex xl:flex-row md:flex-col justify-between mt-3'>
                        <label className='text-sm text-[#2d2d2d] font-bold'>
                          Road Fund License:
                        </label>
                        <div className='text-sm font-normal text-[#2d2d2d]'>
                          Included
                        </div>
                      </div>
                      <div className='flex xl:flex-row md:flex-col justify-between mt-3'>
                        <label className='text-sm text-[#2d2d2d] font-bold'>
                          Roadside Assit:
                        </label>
                        <div className='text-sm font-normal text-[#2d2d2d]'>
                          Included
                        </div>
                      </div>
                      <div className='flex xl:flex-row md:flex-col justify-between mt-3 '>
                        <label className='text-sm text-[#2d2d2d] font-bold'>
                          Standard Delivery:
                        </label>
                        <div className='text-sm font-normal text-[#2d2d2d]'>
                          Included
                        </div>
                      </div>
                      <div className='flex xl:flex-row md:flex-col justify-between mt-3'>
                        <label className='text-sm text-[#2d2d2d] font-bold'>
                          Annual mileage:
                        </label>
                        <div className='text-sm font-normal text-[#2d2d2d]'>
                          {carselectResponse?.carOffer?.term == 'Short Term' ? selectedMileage : selectedMileage || 'Not Selected'}
                        </div>
                      </div>
                      <div className='flex xl:flex-row md:flex-col justify-between mt-3'>
                        <label className='text-sm text-[#2d2d2d] font-bold'>
                          Contract Length:
                        </label>
                        <div className='text-sm font-normal text-[#2d2d2d]'>
                          {selectedDuration ? selectedDuration : 'Not Selected'}
                        </div>
                      </div>
                      <div className='flex xl:flex-row md:flex-col justify-between mt-3 '>
                        <label className='text-sm text-[#2d2d2d] font-bold'>
                          Maintenance:
                        </label>
                        <div className='text-sm font-normal text-[#2d2d2d]'>
                          {selectedOption?.includeMaintenance}
                        </div>
                      </div>

                      {/* test:{selectedOption.contractLength}
                       upfrontpayment:{selectedOption.UpfrontPayment}
                        includeMaintenance:{selectedOption.includeMaintenance} */}
                    </div>
                    <div>
                      {/* {
                        monthlycost ?  <Link href={`/contact/chooseDeal/${carselectResponse?.carOffer?._id}/${selectedDuration}/${carselectResponse?.carOffer?.term == 'Short Term' ? sortmileage:selectedMileage}/${monthlycost}`}>
                        <label className={`w-full mb-5 h-[50px] border ${ monthlycost ? '' : 'bg-slate-300 text-orange-300 '} gap-2 text-orange-500 hover:bg-orange-500 hover:transition-all hover:text-white rounded-[50px] lg:h-8 md:h-14 h-12 flex flex-row px-10 py-6 border border-orange-500 font-semibold w-max items-center justify-center lg:text-[22px] md:text-base text-sm`}>
                          <button className={`mt-6 ${monthlycost ? 'cursor-pointer':'cursor-not-allowed'} w-full mb-6  gap-2 lg:h-8 lg:p-6 lg:text-lg md:h-14 h-12 flex flex-row px-2 py-1 first-line:border-2 border-orange-500 font-semibold items-center justify-center text-base rounded-lg`}>
                            Choose this deal
                          </button>

                          
                        </label>
                      </Link>
                      :

                      <label className={`w-full mb-5 h-[50px] border ${ monthlycost ? 'bg-[#02485C]' : 'bg-white text-orange-300 '} gap-2 text-orange-500 hover:bg-orange-500 hover:transition-all hover:text-white rounded-[50px] lg:h-8 md:h-14 h-12 flex flex-row px-10 py-6 border border-orange-500 font-semibold w-max items-center justify-center lg:text-[22px] md:text-base text-sm`}>
                        <button className={`mt-6 ${monthlycost ? 'cursor-pointer':'cursor-not-allowed'} w-full mb-6 rounded-lg gap-2 lg:h-8 lg:p-6 lg:text-lg md:h-14 h-12 flex flex-row px-2 py-1 first-line:border-2 border-orange-500 font-semibold items-center justify-center text-base rounded-lg`}>
                          Choose this deal
                        </button>
                      </label>
               
                      } */}
                      {monthlycost ? <Link href={`/contact/chooseDeal/${carselectResponse?.carOffer?._id}/${selectedDuration}/${carselectResponse?.carOffer?.term == 'Short Term' ? selectedMileage : selectedMileage}/${monthlycost}`}>
                        <Button variant={'choose-deal'} classname={`${monthlycost ? 'cursor-pointer' : 'cursor-not-allowed hover:bg-[#fdf3e5]'} hover:bg-[#fdf3e5] hover:text-[#f06400] px-9 py-[10px] w-full mt-[26px] rounded-[50px] text-[#f06400] lg:text-[16px] text-sm font-bold border border-[#f06400] hover:shadow-md `} label='Choose this deal'></Button>
                      </Link>
                        :

                        <Button variant={'choose-deal'} classname={`${monthlycost ? 'cursor-pointer' : 'cursor-not-allowed'} hover:bg-[#fdf3e5] hover:text-[#f06400]   px-9 py-[10px] w-full mt-[26px] rounded-[50px] text-[#f06400] lg:text-[16px] text-sm font-bold border border-[#f06400] hover:shadow-md `} label='Choose this deal'></Button>


                      }


                    </div>

                  </div>
                </div>

              </div>

            </div>


            <div>
              <Tabs.Tabsaccordian tabs={result} />
            </div>

            {/* Section steps------------------------------------- */}

            <div className='lg:pt-20 pt-8 '>
              <h2 className='font-bold mb-6 text-lg md:text-xl lg:text-2xl text-[#494646]'>Getting started with personal leasing</h2>
              <div className='flex md:flex-row flex-col z-[1] relative justify-between'>
                {Data.Steps.map((step, i) => {
                  return (
                    <>
                      <Stepscontainer number={step?.number} title={step?.title} contain={step?.details} key={i} />
                    </>
                  )
                })}
                <div className='absolute hidden md:block top-2'>
                  <img src="../images/line.png" />
                </div>
              </div>

              <div>

              </div>
            </div>

            {/* Leasing work */}

            <div className=''>
              <div className="grid grid-rows-1 gap-4 mt-8 lg:mt-20">
                <div className='flex flex-col md:flex-row gap-6 w-full align-middle'>
                  <div className='md:w-3/6'>
                    <img src="../images/skodafront.png" />
                  </div>
                  <div className='md:w-3/6 ' >
                    <Title className='text-[#494646] text-xl md:text-3xl font-bold' text="How does leasing work" />
                    <p className='text-[#9F9F9F] text-sm md:text-base mt-6 '>
                      Personal leasing, or personal contract hire, is a fixed-term contract where you pay an agreed monthly rental
                      for use of a brand-new vehicle for a set amount of time. Your initial deposit and monthly rental will be based
                      on how many miles you’ll drive per year,the leasing period–usually between two and five years – and the forecast
                      vehicle value at the end of your contract.During your agreement we’ll be on hand for any support you might need.
                      Provided that the vehicle is in suitable condition and you have not travelled more than the agreed number of miles
                      at the end of your leasing contract, you just return the car.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-rows-1 gap-4 mt-8 lg:mt-20">
                <div className='flex flex-col-reverse md:flex-row w-full align-middle '>
                  <div className='md:w-3/6 ' >
                    <Title className='text-[#494646] text-xl md:text-3xl font-bold' text="Benefits of leasing " />
                    <div className='mt-6'>
                      {Data?.Benefits?.map((data, i) => {
                        return (
                          <>

                            <div className=' relative pl-8' key={i}>
                              <div className='inline'>
                                <img className='absolute left-1 top-1 h-4 w-4' src={data?.icon} />
                              </div>
                              <div>
                                <h4 className=' text-sm md:text-base align-middle text-[#939393]'> {data?.maintext}</h4>
                              </div>

                            </div>
                          </>
                        )
                      })}
                    </div>
                  </div>
                  <div className='md:w-3/6'>
                    <img src="../images/skodaside.png" />
                  </div>
                </div>
              </div>
            </div>


          </SectionLayout>
        </Mainbody>
      </Mainheaderlayout>
    </>

  )
}


export async function getServerSideProps(context) {
  const car = context?.params
  // console.log(car?.carSelectdetails, "id car");

  //   // const [lease, selecteMake, selectseries] = car
  //   // // const lease = car[0]
  //   // // const selecteMake = car[1]
  //   // // const selectseries = car[2]

  //   // const res = await axios.get(`http://api.leaseplan.dev.client.kloudlite.io/cardetails?leaseType=${lease}&carBrand=${selecteMake}&carSeries=${selectseries}`)

  const res = await axios.get(`/carOffer/fetch-single/${car?.carSelectdetails}`)
  const carselectResponse = res?.data
  //   console.log(res.data, "contact resppppppppp");

  return {
    props: { carselectResponse: carselectResponse?.data } // will be passed to the page component as props
  }
}
export default CarSelectdetails
