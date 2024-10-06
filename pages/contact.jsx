import React, {useEffect, useState} from 'react'

import { Mainbody, SectionLayout, Mainheaderlayout } from '../components/organism/Maincomponent/mainlyout';
import Cardetails from '../components/atoms/cardetails';
import Tabs from '../components/atoms/tabs';
import Data from '../components/layout/test.data.json';
import Stepscontainer from "../components/atoms/stepscontainer"
import Accordion from '../components/atoms/Accordion';
import Link from 'next/dist/client/link';
import Carallimage from './test';


import Button from '../components/atoms/button';

import Title from '../components/atoms/title';
// const contact = () => {

  
  
//     const [currentImage, setCurrentImage] = useState();
  
//     const images = [
//       { id: 1, src: "../images/Group780.png" },
//       { id: 2, src: "../images/car1.png" },
//       { id: 3, src: "../images/car2.png" }
//     ];

//     useEffect(() => {
//       setCurrentImage(images[0])
//     },[])
 
//     return (
//       <div className="flex flex-col">
//         <div className="hidden md:flex md:flex-row">
//           {images.map(image => (
//             <img
//               key={image.id}
//               className="w-32 h-32 mr-4 cursor-pointer"
//               src={image.src}
//               onClick={() => setCurrentImage(image)}
//             />
//           ))}
//         </div>
//         {currentImage && (
//           <div className="flex-1">
//             <img className="w-full h-full object-cover" src={currentImage.src} />
//           </div>
//         )}
//       </div>
//     );
//   };


// export default contact


const ContractForm = () => {
  const[activeTab, setActivetab] = useState(0);
  const tabs = [
    {
      title: "Standard Equipment",
      content: [
        {
          title: "Exterior Features",
          content: "Accordion content goes here",
        },
        {
          title: "Interior Features",
          content: "Accordion content goes here",
        },
        {
          title: "Entertainment",
          content: "Accordion content goes here",
        },
        {
          title: "Safety Features",
          content: "Accordion content goes here",
        },
        {
          title: "Driver Convenience",
          content: "Accordion content goes here",
        },
        {
          title: "Security",
          content: "Accordion content goes here",
        },
       
      ],
    },
    {
      title: "Technical spec",
      content: [
        {
          title: "Entertainment",
          content: "Accordion content goes here",
        },
        {
          title: "Safety",
          content: "Accordion content goes here",
        },
        {
          title: "Entertainment",
          content: "Accordion content goes here",
        },
        {
          title: "Entertainment",
          content: "Accordion content goes here",
        },
        {
          title: "Entertainment",
          content: "Accordion content goes here",
        },
        {
          title: "Entertainment",
          content: "Accordion content goes here",
        },
      ],
    },
    
  ];
  

  const handleTabClick = (index) => {
    return (
        setActivetab(index)
    )
}


  const [selectedOption, setSelectedOption] = useState({
    contractLength: "24 Months",
    Longtermlease:"Longtermlease",
    annualMileage: "12,000",
    UpfrontPayment:"4",
    includeMaintenance: "Yes"
  });

  const handleOptionChange = (e) => {
    setSelectedOption({
      ...selectedOption,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (e) => {
    setSelectedOption({
      ...selectedOption,
      [e.target.name]: e.target.value
    });
  };

  // console.log(selectedOption.contractLength, "jjjjjj")

  return (
    <>
   <Mainheaderlayout>
    <Mainbody>
    <SectionLayout>
         
    <div className="flex md:flex-row flex-col gap-x-6  ">
     <div className="w-full md:w-8/12 xl:w-9/12 p-4 " style={{background:"linear-gradient(276.68deg, rgba(234, 123, 0, 0.08) 14.71%, rgba(230, 64, 25, 0.08) 98.27%) ", borderRadius:"18px"}}>
        
        <div className='w-full'>
           <Carallimage/>
        </div>

       <Cardetails
           carname='Genesis GV60 Electric SUV'
           cardetails='Lorem ipsum lorem ipsum lorem  ipsum lorem ipsum lorem ipsum lorem ipsum  ipsum lorem ipsum lorem ipsum lorem '
           cartype='Manual'
           gas='40/nji'
           fuel='Petrol'
           mileage='70km/1hr'
           
           maintain='YES'
           morecontent='Proin auctor urna et urna tincidunt, vel sagittis magna blandit.
            Nam eleifend euismod mauris a tincidunt. Curabitur interdum orci
            eget euismod faucibus. Nullam tempus quis lacus id finibus.
            Aliquam erat volutpat. Nulla euismod odio non justo feugiat
            ullamcorper. Nunc auctor velit vel bibendum posuere.'
           />
     </div>
     <div className="w-full md:w-4/12 xl:w-3/12 h-full " >
      <div className="bg-white border border-slate-100 shadow-lg rounded-xl flex flex-col items-center ">
     <div className="flex mt-8 flex-col lg:w-52 xl:w-64 mb-4">
        <label className="text-sm lg:text-base font-medium">Long Term Lease</label>
        <div className="mt-2 flex lease_term_btn">
          <label className="w-full h-[50px] border bg-orange-500 text-white rounded-l-lg rounded-r-lg text-xs lg:text-sm px-2 font-semibold flex justify-center cursor-pointer items-center">
            <button
              type="radio"
         
              name="Longtermlease"
              value="Long Term Lease"
           
              {...selectedOption.contractLength === '24 months' ? 'bg-orange-300' : ''}
     
              onClick={handleCheckboxChange}
              onChange={handleOptionChange}
              className="bg-Orange-800 font-semibold lg:text-lg md:text-base text-sm"
            />
           Long Term Lease
          </label>
        
        </div>
      </div>
      <div className="flex flex-col w-96 md:w-40 lg:w-52 xl:w-64 mb-4">
        <label className="text-sm lg:text-base font-medium">Contract lenth (months)</label>
        <div className="mt-2 flex">
          <label className="text-xs md:text-xs lg:text-sm w-16 h-[50px] border bg-orange-100 hover:bg-orange-500 hover:text-white rounded-l-lg flex justify-center cursor-pointer items-center">
            <button
              type="radio"
         
              name="contractLength"
              value="24 Months"
           
              {...selectedOption.contractLength === '24 months' ? 'bg-orange-300' : ''}
     
              onClick={handleCheckboxChange}
              onChange={handleOptionChange}
              className="bg-Orange-800"
            />
            24 
          </label>
          <label className="text-xs md:text-xs lg:text-sm w-16 h-[50px] border bg-orange-100 hover:bg-orange-500 hover:text-white flex justify-center cursor-pointer items-center ">
            <button
              type="radio"
              name="contractLength"
              value="36 Months"
              {...selectedOption.contractLength === '36 months' ? 'bg-orange-300' : ''}
              onClick={handleCheckboxChange}
              onChange={handleOptionChange}
              className=""
            />
            36 
          </label>
          <label className="text-xs md:text-xs lg:text-sm w-16 h-[50px] border bg-orange-100 hover:bg-orange-500 hover:text-white flex justify-center cursor-pointer items-center ">
            <button
              type="radio"
              name="contractLength"
              value="48 Months"
              {...selectedOption.contractLength === '36 months' ? 'bg-orange-300' : ''}
              onClick={handleCheckboxChange}
              onChange={handleOptionChange}
              className=""
            />
            48
          </label>
          <label className="text-xs md:text-xs lg:text-sm w-16 h-[50px] border bg-orange-100 hover:bg-orange-500 hover:text-white flex justify-center cursor-pointer items-center rounded-r-lg">
            <button
              type="radio"
              name="contractLength"
              value="60 Months"
              {...selectedOption.contractLength === '36 months' ? 'bg-orange-300' : ''}
              onClick={handleCheckboxChange}
              onChange={handleOptionChange}
              className=""
            />
            60
          </label>
        </div>
      </div>
      <div className="flex flex-col md:w-40 lg:w-52 xl:w-64 mt-6 mb-4">
        <label className="text-sm lg:text-base font-medium">Annual mileage (thousands)</label>
        <div className="mt-2 flex">
          <label className=" text-xs md:text-xs lg:text-sm w-16 h-[50px] border bg-orange-100 hover:bg-orange-500 hover:text-white rounded-l-lg flex justify-center cursor-pointer items-center">
            <button
              type="radio"
              name="annualMileage"
              value="12,000"
              onClick={handleCheckboxChange}
              onChange={handleOptionChange}
              className=""
            />
            12
          </label>
          <label className="text-xs md:text-xs lg:text-sm w-16 h-[50px] border bg-orange-100 hover:bg-orange-500 hover:text-white flex justify-center cursor-pointer items-center">
            <button
              type="radio"
              name="annualMileage"
              value="4,000"
              onClick={handleCheckboxChange}
              onChange={handleOptionChange}
              className=""
            />
            4
          </label>
          <label className="text-xs md:text-xs lg:text-sm w-16 h-[50px] border bg-orange-100 hover:bg-orange-500 hover:text-white  flex justify-center cursor-pointer items-center">
            <button
              type="radio"
              name="annualMileage"
              value="6,000"
              onClick={handleCheckboxChange}
              onChange={handleOptionChange}
              className=""
            />
            6
          </label>
          <label className="text-xs md:text-xs lg:text-sm w-16 h-[50px] border bg-orange-100 hover:bg-orange-500 hover:text-white  flex justify-center cursor-pointer items-center">
            <button
              type="radio"
              name="annualMileage"
              value="8,000"
              onClick={handleCheckboxChange}
              onChange={handleOptionChange}
              className=""
            />
            8
          </label>
          <label className="text-xs md:text-xs lg:text-sm w-16 h-[50px] border bg-orange-100 hover:bg-orange-500 hover:text-white flex justify-center cursor-pointer items-center">
            <button
              type="radio"
              name="annualMileage"
              value="10,000"
              onClick={handleCheckboxChange}
              onChange={handleOptionChange}
              className=""
            />
            10
          </label>
          <label className="text-xs md:text-xs lg:text-sm w-16 h-[50px] border bg-orange-100 hover:bg-orange-500 hover:text-white rounded-r-lg flex cursor-pointer justify-center items-center">
            <button
              type="radio"
              name="annualMileage"
              value="12,000"
              onClick={handleCheckboxChange}
              onChange={handleOptionChange}
              className=""
            />
            12
          </label>
        </div>
      </div>
      <div className="flex flex-col md:w-40 lg:w-52 xl:w-64 mt-6 mb-4">
        <label className="text-sm lg:text-base font-medium">Upfront Payment</label>
        <div className="mt-2 flex">
          <label className="text-xs md:text-xs lg:text-sm w-16 h-[50px] border bg-orange-100 hover:bg-orange-500 hover:text-white rounded-l-lg flex justify-center cursor-pointer items-center">
            <button
              type="radio"
              name="UpfrontPayment"
              value="4,000"
              onClick={handleCheckboxChange}
              onChange={handleOptionChange}
              className=""
            />
             4
          </label>
          <label className="text-xs md:text-xs lg:text-sm w-16 h-[50px] border bg-orange-100 hover:bg-orange-500 hover:text-white  flex justify-center cursor-pointer items-center">
            <button
              type="radio"
              name="UpfrontPayment"
              value="10,000"
              onClick={handleCheckboxChange}
              onChange={handleOptionChange}
              className=""
            />
            10
          </label>
          <label className="text-xs md:text-xs lg:text-sm w-16 h-[50px] border bg-orange-100 hover:bg-orange-500 hover:text-white rounded-r-lg  flex justify-center cursor-pointer items-center">
            <button
              type="radio"
              name="UpfrontPayment"
              value="15,000"
              onClick={handleCheckboxChange}
              onChange={handleOptionChange}
              className=""
            />
            15
          </label>
        </div>
      </div>
      <div className="flex flex-col md:w-40 lg:w-52 xl:w-64 mt-6">
        <label className="text-sm lg:text-base font-medium">Include Maintenance:</label>
        <div className="mt-2 flex">
         
            {/* <input
              type="checkbox"
              name="includeMaintenance"
              checked={selectedOption.includeMaintenance}
              onChange={handle */}
        

          <label className="text-xs md:text-xs lg:text-sm w-32 h-[50px] border bg-orange-100 hover:bg-orange-500 hover:text-white rounded-l-lg flex justify-center cursor-pointer items-center">
            <button
              type="radio"
              name="includeMaintenance"
              value="Yes"
              onClick={handleCheckboxChange}
              onChange={handleOptionChange}
              className=""
            />
            Yes
          </label>
          <label className="text-xs md:text-xs lg:text-sm w-32 h-[50px] border bg-orange-100 hover:bg-orange-500 hover:text-white rounded-r-lg flex justify-center cursor-pointer items-center">
            <button
              type="radio"
              name="includeMaintenance"
              value="No"
              onClick={handleCheckboxChange}
              onChange={handleOptionChange}
              className=""
            />
            No
          </label>

      </div>

      <div>
       <h2 className='font-medium mt-4 text-sm lg:text-base'>Summary</h2>
        <div className='flex justify-between mt-4'>
          <label className='text-xs lg:text-sm  font-semibold text-[#757575]'>
            Contact Type:
          </label>
          <div className='text-xs md:text-sm'>
            {selectedOption.contractLength}
          </div>
        </div>
        <div className='flex justify-between mt-4'>
          <label className='text-xs lg:text-sm font-bold text-[#757575]'>
          Upfront-Payment:
          </label>
          <div className='text-xs md:text-sm'>
          {selectedOption.UpfrontPayment}
          </div>
        </div>
        <div className='flex justify-between mt-4'>
          <label className='text-xs lg:text-sm font-bold text-[#757575]'>
            Contact Length:
          </label>
          <div className='text-xs md:text-sm'>
            {selectedOption.contractLength}
          </div>
        </div>
        <div className='flex justify-between mt-4'>
          <label className='text-xs lg:text-sm font-bold text-[#757575]'>
            Maintenance:
          </label>
          <div className='text-xs md:text-sm'>
          {selectedOption.includeMaintenance}
          </div>
        </div>
        <div className='flex justify-between mt-4'>
          <label className='text-xs lg:text-sm font-bold text-[#757575]'>
            Road Fund License:
          </label>
          <div className='text-xs md:text-sm'>
           Included
          </div>
        </div>
        <div className='flex justify-between mt-4'>
          <label className='text-xs lg:text-sm font-bold text-[#757575]'>
            Roadside Assit:
          </label>
          <div className='text-xs md:text-sm'>
          Included
          </div>
        </div>
        <div className='flex justify-between mt-4 mb-4'>
          <label className='text-xs lg:text-sm font-bold text-[#757575]'>
            Standard Delivery:
          </label>
          <div className='text-xs md:text-sm'>
          Included
          </div>
        </div>
        {/* test:{selectedOption.contractLength}
        upfrontpayment:{selectedOption.UpfrontPayment}
        includeMaintenance:{selectedOption.includeMaintenance} */}
      </div>

        </div>
       </div>
       
      <div className='bg-white border border-slate-100 shadow-lg rounded-lg flex flex-col items-center mt-8'>
         <div className='flex items-center py-3'>
         <div className=' mt-6  font-bold text-[#494646]'>
            <h2 className='text-lg lg:text-xl'>AED211</h2>
          </div>
          <div className='text-xs md:text-sm mt-6 pl-3.5'>
            Per month (incl.VAT)
          </div>
         </div>
       <Link href='/privatelease'>
       <button className='mt-6 mb-6  gap-2 text-white bg-orange-500  lg:h-8 md:h-14 h-12 flex flex-row px-2 py-1 first-line:border-2 border-orange-500 font-semibold w-max items-center justify-center text-sm md:text-base rounded-lg'>
          Choose this deal
        </button>
       </Link>
        {/* <button className='mb-8  rounded-lg text-orange-500 lg:h-8 md:h-14 h-12 flex flex-row px-2 py-1 border-4 border-orange-500 font-semibold w-max items-center justify-center text-sm md:text-base bg-white '>
          Download details
        </button> */}

      </div>
       

     </div>

     </div>

 
     <div>
     <Tabs.Tabsaccordian tabs={tabs}/>
     </div>

{/* Section steps------------------------------------- */}

    
       <div>
         <h2 className='font-bold mt-8 mb-9 text-lg md:text-xl lg:text-2xl'>Getting started with personal leasing</h2>
         <div className='flex md:flex-row flex-col z-[1] relative justify-between'>
            {Data.Steps.map((step, i) => {
              return(
                <>
                  <Stepscontainer number={step.number} title={step.title} contain={step.details}/>
                </>
              )
            })}
            <div className='absolute hidden md:block top-2'>
            <img src="../images/line.png"/>
            </div>
         </div>
        
         <div>
         s
         
         </div>
       </div>

  {/* Leasing work */}

      <div>
    <div class="grid grid-rows-1 gap-4 mt-20">
      <div className='flex flex-col md:flex-row w-full align-middle'>
        <div className='md:w-3/6'>
          <img src="../images/skodafront.png"/>
        </div>
        <div className='md:w-3/6 ' >
            <Title className='text-[#494646] text-3xl font-bold'  text="How does leasing work"/>
            <p className='text-[#9F9F9F] mt-6 '>
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

   <div class="grid grid-rows-1 gap-4 mt-20">
      <div className='flex flex-col-reverse md:flex-row w-full align-middle '>
        <div className='md:w-3/6 ' >
            <Title className='text-[#494646] text-3xl font-bold'  text="Benefits of leasing "/>
            <div className='mt-6'>
             {Data.Benefits.map((data) => {
             return(
               <>
                 <div className='flex p-2.5'>
                 <img className='pr-3' src={data.icon} />
                  <h4 className=' text-base align-middle text-[#939393]'> {data.maintext}</h4>
              </div>
               </>
             )
           })}
            </div>
        </div>
        <div className='md:w-3/6'>
          <img src="../images/skodaside.png"/>
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

export default ContractForm