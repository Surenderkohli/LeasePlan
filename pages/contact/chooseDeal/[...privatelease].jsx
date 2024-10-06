import React, { useState } from 'react'
import { Mainbody, SectionLayout, Mainheaderlayout } from '../../../components/organism/Maincomponent/mainlyout';
import Image from 'next/image'
import Imagecustom from '../../../components/atoms/image'
// import axios from 'axios'
import axios from "../../../utils/backendAxios"
import { useRouter } from 'next/router';
import Fleet from '../../fleet';
import Title from '../../../components/atoms/title';
import CarLoader from '../../../components/atoms/carloader';

const Privatelease = ({ carselectResponse }) => {
  const [carname, setCarname] = useState("Genesis GV60 Electric SUV")
  const [carmodel, setCarmodel] = useState('1.2 PureTech 11- Shine')
  const [payment, setPayement] = useState('AED 202')
  const [milage, setMilage] = useState('5000')
  const [cost, setCost] = useState('AED 1211')
  const [manual, setManual] = useState('Manual')
  const [fueltype, setFueltype] = useState('Petrol')
  const [Gears, setGears] = useState('6 Speed')
  const router = useRouter()
  // const [car_id,contractLength,annualMileage,monthlyCost] =props?.paramsdata
  const apiResponse = carselectResponse
  // console.log(apiResponse,"api");
  // console.log(car_id,'carid');
  // console.log(props?.paramsdata,"emmmmmrjnejfnjd");
  const querryData = router?.query?.privatelease
  // console.log(router?.query?.privatelease, 're');
  // console.log(querryData[0],"datta.....");


  return (
    <>
      <Mainheaderlayout>
        <Mainbody>
          <SectionLayout className={'lg:pt-36 md:pt-24 pt-24 min-h-[82.5vh]'}>
            {/* {This is section of top content} */}
            <div className='flex flex-col md:flex-row justify-between '>
              <Title className='text-[#494646] text-base  xl:text-lg font-bold mb-3 md:mb-0' text="Enquire now and speak to our expert team" />
              <Title className='text-[#494646] text-base xl:text-lg font-bold mb-3 md:mb-0' text="What happens next?" />
              <Title className='text-[#494646] text-base xl:text-base font-normal ' text="We'll call to confirm your choise and arrange a credit check" />
            </div>

            {/* {Section for form & detail page} */}

            <div className='w-full flex md:flex-row flex-col py-6 gap-6 '>
              <div className='md:w-4/6'>
              <div className='w-full lg:h-[521px] md:h-[302px]  sm:h-[289px] h-[251px] mb-6'>
                    <Image
                     className="w-full h-full max-h-[350px] md:max-h-[500px] object-cover rounded-xl"
                     src={apiResponse?.carDetails?.image[0]?.imageUrl}
                     alt="Car Image"
                     width={820}
                     height={520}
                     />
              </div>
                <div className='w-full rounded-lg shadow-lg p-6 h-auto bg-white'>
                  <div className='flex justify-between'>
                    <div className='text-sm md:text-base font-bold'>{apiResponse?.carOffer?.carBrand_id?.companyName}</div>
                    <div className='text-base '>{apiResponse?.carOffer?.carSeries_id?.seriesName}</div>
                  </div>
                  {/* <div className='text-lg lg:text-xlpy-3 font-semibold'>
                              <Title text='Personal Contract Hire'/>
                            </div> */}
                  <div className='flex py-3 justify-between'>
                    <div className='text-sm md:text-base font-bold'>
                      <Title text='Contract length' />
                    </div>
                    <div>
                      {querryData[1]}
                    </div>
                  </div>

                  <div className='flex py-3 justify-between'>
                    <div className='text-sm md:text-base font-bold'>
                      <Title text='Annual mileage' />
                    </div>
                    <div>
                      {querryData[2]}
                    </div>
                  </div>

                  <div className='flex py-3 justify-between'>
                    <div className='text-sm md:text-base font-bold'>
                      <Title text='Monthly Cost' />
                    </div>
                    <div className='text-lg font-semibold'>
                      {'AED '}{querryData[3]}
                    </div>
                  </div>

                  <div className='flex py-3 justify-between'>
                    <div className='text-sm md:text-base font-bold'>
                      <Title text='Gearbox' />
                    </div>
                    <div>
                      {apiResponse?.carDetails?.transmission}
                    </div>
                  </div>

                  <div className='flex py-3 justify-between'>
                    <div className='text-sm md:text-base font-bold'>
                      <Title text='Fuel Type' />
                    </div>
                    <div>
                      {apiResponse?.carDetails?.fuelType}
                    </div>
                  </div>

                  <div className='flex py-3 justify-between'>
                    <div className='text-sm md:text-base font-bold'>
                      <Title text='Gears' />
                    </div>
                    <div>
                      {apiResponse?.carDetails?.gears}
                    </div>
                  </div>

                  <div className='flex py-3 justify-between'>
                    <div className='text-sm md:text-base font-bold'>
                      <Title text='acceleration' />
                    </div>
                    <div>
                      {apiResponse?.carDetails?.acceleration}
                    </div>
                  </div>

                </div>
              </div>
              <div className='md:w-3/6  sticky md:top-[100px] h-full'>
                <Fleet enquiryData={querryData}/>
                
              </div>
            </div>

            {/* {Section for privacy} */}
            <div className='w-full h-auto px-10 py-6 font-semibold bg-white  rounded-xl text-[#494646] shadow-xl'>
              <p>
                 The pricing stated on this page is subject to change until you speak to a member of our team and get an official offer.

                </p>
            </div>

            {/* form */}

          </SectionLayout>
        </Mainbody>
      </Mainheaderlayout>
    </>
  )
}
export async function getServerSideProps(context) {
  const car = context?.params
  // console.log(car.carSelectdetails, "id car");
  const paramsdata = car?.privatelease
  const [car_id, contractLength, annualMileage, monthlyCost] = paramsdata
  //   // // const lease = car[0]
  //   // // const selecteMake = car[1]
  //   // // const selectseries = car[2]

  //   // const res = await axios.get(`http://api.leaseplan.dev.client.kloudlite.io/cardetails?leaseType=${lease}&carBrand=${selecteMake}&carSeries=${selectseries}`)
  //http://api.leaseplan.dev.client.kloudlite.io/enquiry-form/add-enquireForm?duration=24&annualMileage=25000&monthlyCost=AED%20195

  const res = await axios.get(`/carOffer/fetch-single/${car_id}`)
  const carselectResponse = res?.data?.data
  // console.log(res.data, "contact resppppppppp");

  return {
    props: { carselectResponse } // will be passed to the page component as props
  }
}

export default Privatelease