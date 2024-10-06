import React, {useState} from 'react'
import { Mainbody, SectionLayout, Mainheaderlayout } from '../components/organism/Maincomponent/mainlyout';
import Title from '../components/atoms/title'
import Fleet from '../pages/fleet';
import Imagecustom from '../components/atoms/image'
import axios from '../utils/backendAxios'

const Privatelease = ()  =>{
  const [carname, setCarname] = useState("Genesis GV60 Electric SUV")
  const [carmodel, setCarmodel] = useState('1.2 PureTech 11- Shine')
  const [payment, setPayement] = useState('AED 202')
  const [milage, setMilage] = useState('5000')
  const [cost, setCost] = useState('AED 1211')
  const [manual, setManual] = useState('Manual')
  const [fueltype, setFueltype] = useState('Petrol')
  const [Gears, setGears] = useState('6 Speed')
  const [miph, setmiph] = useState('9.4 seconds')

  return (
    <>
       <Mainheaderlayout>
          <Mainbody>
          <SectionLayout> 
            {/* {This is section of top content} */}
               <div className='flex flex-col md:flex-row justify-between mt-24 md:mt-12'>
               <Title className='text-[#494646] text-base  xl:text-lg font-bold mb-3 md:mb-0'  text="Enquire now and speak to our expert team"/>
               <Title className='text-[#494646] text-base xl:text-lg font-bold mb-3 md:mb-0'  text="What happens next?"/>
               <Title className='text-[#494646] text-base xl:text-base font-normal mb-3 md:mb-0'  text="We'll call to confirm your choise and arrange a credit check"/>
               </div>

              {/* {Section for form & detail page} */}
                
                <div className='w-full flex md:flex-row flex-col py-12 gap-6 '> 
                    <div className='md:w-4/6'>
                        <div className='w-full h-96'>
                        <Imagecustom 
                           src="/images/skodafront.png"
                           alt="choised of the car"
                           width={500}
                           height={500}
                         />
                        </div>
                        <div className='w-full rounded-lg shadow-lg p-6 h-auto border border-slate-300 bg-white'>
                            <div className='flex justify-between'>
                              <div className='text-lg lg:text-xl font-semibold'>{carname}</div>
                              <div className='text-base '>{carmodel}</div>
                            </div>
                            <div className='text-lg lg:text-xlpy-3 font-semibold'>
                              <Title text='Personal Contract Hire'/>
                            </div>
                            <div className='flex py-3 justify-between'>
                              <div className='text-lg lg:text-xl font-semibold'> 
                              <Title text='60 monthly payments'/>
                              </div>
                              <div>
                                {payment}
                              </div>
                            </div>

                            <div className='flex py-3 justify-between'>
                              <div className='text-lg lg:text-xl font-semibold'>
                              <Title text='Annual mileage'/>
                              </div>
                              <div>
                                {milage}
                              </div>
                            </div>

                            <div className='flex py-3 justify-between'>
                              <div className='text-lg lg:text-xl font-semibold'>
                              <Title text='Upfront Cost'/>
                              </div>
                              <div>
                                {cost}
                              </div>
                            </div>

                            <div className='flex py-3 justify-between'>
                              <div className='text-lg lg:text-xl font-semibold'>
                              <Title text='Gearbox Manual'/>
                              </div>
                              <div>
                                {manual}
                              </div>
                            </div>

                            <div className='flex py-3 justify-between'>
                              <div className='text-lg lg:text-xlfont-semibold'>
                              <Title text='Fuel Type'/>
                              </div>
                              <div>
                                {fueltype}
                              </div>
                            </div>

                            <div className='flex py-3 justify-between'>
                              <div className='text-lg lg:text-xlfont-semibold'>
                              <Title text='Gears'/>
                              </div>
                              <div>
                                {Gears}
                              </div>
                            </div>

                            <div className='flex py-3 justify-between'>
                              <div className='text-lg lg:text-xl font-semibold'>
                              <Title text='0 - 50 mph'/>
                              </div>
                              <div>
                                {miph}
                              </div>
                            </div>

                        </div>  
                    </div>
                    <div className='md:w-3/6'>
                        <Fleet/>
                    </div>
                </div>
              


              {/* {Section for privacy} */}
             <div className='w-full h-auto px-10 py-6 font-semibold bg-white border border-white-500 rounded-xl text-[#494646] shadow-xl'>
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

export default Privatelease