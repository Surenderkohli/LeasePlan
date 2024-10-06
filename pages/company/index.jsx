import React, { useState } from 'react'
import Search from '../../components/atoms/search'
import Button from '../../components/atoms/button';
import { Mainbody, SectionLayout, Mainheaderlayout } from '../../components/organism/Maincomponent/mainlyout';
import BoxGrid from '../../components/atoms/box';
import Mobilefilter from '../../components/atoms/mobilefilter';
import Cardetails from '../../components/atoms/cardetails';
import Carallimage from '.././test';
import { redirect } from 'next/dist/server/api-utils';



const Company = ({car}) => {
  // console.log(car, "this is company banner")

  const [filter, setFilter] = useState({
    Price: " ",
    Mileage: " ",
    Body: " ",
    Fuel: " ",
  })

  const [results, setResults] = useState([])
  const [filtersbymob, setfiltersbymob] = useState(false)

  // const handleSearch = () => {
  //   return (
  //     <>

  //     </>
  //   )
  // }
  // const showFilter = () => {
  //   alert('hello')
  //   return <Mobilefilter/>
  // }

  const showFilter = () => {
    setfiltersbymob(true)

  }




  return (
    <>
      <div>
        <Mainheaderlayout>
          {/* <Mainbody> */}
          <div className="container  mt-96 mx-auto">


            <div className="searchBar_section fixed w-full  left-0  bg-white ">
              <Search />
              <div className='flex justify-between items-baseline'>
                <h2 className="text-lg md:text-xl text-[#494646] font-bold p-2 mt-12">Our Inventry</h2>
                <Mobilefilter />


              </div>
            </div>



            <div className='Our Inventry'>
              {/* <h2 className="text-xl text-[#494646] font-bold p-2 mt-12">Our Inventry</h2> */}

              <div className="flex gap-x-6 mt-12 ">
                <div className="w-3/12 p-4 lg:block hidden " style={{ background: "linear-gradient(276.68deg, rgba(234, 123, 0, 0.08) 14.71%, rgba(230, 64, 25, 0.08) 98.27%) ", borderRadius: "18px" }}>
                  <h2 className="text-base md:text-lg text-[#494646] font-bold p-2">Filters</h2>
                  {/* <div className="mb-4">
          <label htmlFor="make" className="block font-bold mb-2">Make:</label>
          <select 
            id="make" 
            name="make" 
            className="p-2 border rounded" 
            // onChange={handleFilterChange}
            value={filter.make}
          >
            <option value="">Select a make</option>
            <option>Test1</option>
            <option>Test2</option>
          </select>
        </div> */}
                  <div className="mb-4">
                    <label htmlFor="model" className="block text-[#494646]   text-sm md:text-base font-bold mb-2 p-2">Price(per month):</label>
                    <div className='p-1 '>
                      <Button className="text-sm md:text-base p-2" variant='primary-white-next' label='DHS 0- DHS 250' />
                    </div>

                    <div className='p-1 '>
                      <Button className="text-sm sm:text-base p-2.5" variant='primary-white-next' label='DHS 250- DHS 350' />
                    </div>

                    <div className='p-1 '>
                      <Button className="text-sm sm:text-base p-2.5" variant='primary-white-next' label='DHS 350- DHS 500' />
                    </div>


                    <div className='p-1 '>
                      <Button className="text-sm md:text-base p-2.5" variant='primary-white-next' label='DHS 500 +' />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="year" className="block  text-[#494646] font-bold mb-2  p-2">Mileage(per year)</label>

                    <div className='p-1 '>
                      <Button className="text-sm md:text-base p-2.5" variant='primary-white-next' label='10,000 kms' />
                    </div>

                    <div className='p-1 '>
                      <Button className="text-sm md:text-base p-2.5" variant='primary-white-next' label='12,000 kms' />
                    </div>
                    <div className='p-1 '>
                      <Button className="text-sm md:text-base p-2.5" variant='primary-white-next' label='15,000 kms' />
                    </div>
                    <div className='p-1 '>
                      <Button className="text-sm md:text-base p-2" variant='primary-white-next' label='20,000 kms' />
                    </div>
                    <div className='p-1 '>
                      <Button className="text-sm md:text-base p-2" variant='primary-white-next' label='15,000 kms' />
                    </div>
                    <div className='p-1 '>
                      <Button className="text-sm md:text-base p-2" variant='primary-white-next' label='30,000 kms' />
                    </div>
                    <div className='p-1 '>
                      <Button className="text-sm md:text-base p-2" variant='primary-white-next' label='35,000 kms' />
                    </div>
                    <div className='p-1 '>
                      <Button className="text-sm md:text-base p-2" variant='primary-white-next' label='40,000 kms' />
                    </div>
                    <div className='p-1 '>
                      <Button className="text-sm md:text-base p-2" variant='primary-white-next' label='45,000 kms' />
                    </div>
                    <div className='p-1 '>
                      <Button className="text-sm md:text-base p-2" variant='primary-white-next' label='50,000 kms' />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="year" className="block font-bold text-[#494646] mb-2 p-2">Body</label>
                    {/* <input 
            type="text" 
            id="year" 
            name="year" 
            className="p-2 border rounded" 
            // onChange={handleFilterChange}
            value={filter.year}
          /> */}

                    <div className='p-1 '>
                      <Button variant='primary-white-next' label='City-Car' />
                    </div>
                    <div className='p-1 '>
                      <Button variant='primary-white-next' label='Coupe' />
                    </div>
                    <div className='p-1 '>
                      <Button variant='primary-white-next' label='Estate' />
                    </div>
                    <div className='p-1 '>
                      <Button variant='primary-white-next' label='Hatchback' />
                    </div>
                    <div className='p-1 '>
                      <Button variant='primary-white-next' label='MPV' />
                    </div>
                    <div className='p-1 '>
                      <Button variant='primary-white-next' label='Saloon' />
                    </div>
                    <div className='p-1 '>
                      <Button variant='primary-white-next' label='Sports' />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="year" className="block font-bold mb-2 text-[#494646] p-2">Fuel Type</label>
                    {/* <input 
            type="text" 
            id="year" 
            name="year" 
            className="p-2 border rounded" 
            // onChange={handleFilterChange}
            value={filter.year}
          /> */}
                    <div className='p-1 '>
                      <Button variant='primary-white-next' label='Electric' />
                    </div>
                    <div className='p-1 '>
                      <Button variant='primary-white-next' label='Hybrid' />
                    </div>
                    <div className='p-1 '>
                      <Button variant='primary-white-next' label='Diesel' />
                    </div>
                  </div>

                </div>
                <div className="lg:w-9/12 w-full ">

                  <BoxGrid.Boxinventory
                    image='/images/car1.png'
                    carname="Volkswagon Golf"
                    carmodel="2.0 TSI R-Line 5DR DSG"
                    month="6 month"
                    monthmileage="509 pcm(ex.VAT)"
                    cartype="manual"
                    gas="Co2"
                    fuel="Petrol"
                    mileage="99mile"
                    hreflink="/contact"
                    cardetails="Hyundai has launched the N Line version of its compact SUV at a starting price of ₹12.16 lakh (ex-showroom), going up to ₹13.15 lakh (ex-showroom) for the top-end N8 trim.
          "

                  />

                  <BoxGrid.Boxinventory
                    image='/images/car1.png'
                    carname="Volkswagon Golf"
                    carmodel="2.0 TSI R-Line 5DR DSG"
                    month="6 month"
                    monthmileage="509 pcm(ex.VAT)"
                    cartype="manual"
                    gas="Co2"
                    fuel="Petrol"
                    mileage="99mile"
                    hreflink="/contact"
                    cardetails="Hyundai has launched the N Line version of its compact SUV at a starting price of ₹12.16 lakh (ex-showroom), going up to ₹13.15 lakh (ex-showroom) for the top-end N8 trim.
          "
                  />

                  <BoxGrid.Boxinventory
                    image='/images/car1.png'
                    carname="Volkswagon Golf"
                    carmodel="2.0 TSI R-Line 5DR DSG"
                    month="6 month"
                    monthmileage="509 pcm(ex.VAT)"
                    cartype="manual"
                    gas="Co2"
                    fuel="Petrol"
                    mileage="99mile"
                    hreflink="/contact"
                    cardetails="Hyundai has launched the N Line version of its compact SUV at a starting price of ₹12.16 lakh (ex-showroom), going up to ₹13.15 lakh (ex-showroom) for the top-end N8 trim.
          "
                  />
                  <BoxGrid.Boxinventory
                    image='/images/car1.png'
                    carname="Volkswagon Golf"
                    carmodel="2.0 TSI R-Line 5DR DSG"
                    month="6 month"
                    monthmileage="509 pcm(ex.VAT)"
                    cartype="manual"
                    gas="Co2"
                    fuel="Petrol"
                    mileage="99mile"
                    hreflink="/contact"
                    cardetails="Hyundai has launched the N Line version of its compact SUV at a starting price of ₹12.16 lakh (ex-showroom), going up to ₹13.15 lakh (ex-showroom) for the top-end N8 trim.
          "
                  />


                </div>
              </div>
            </div>
          </div>
          {/* </Mainbody> */}
        </Mainheaderlayout>

      </div>
    </>
  )
}

export const getServerSideProps =(context)=>{
  
const auth = false
  if(!auth){
    return {
      redirect:{
        destination:'/',
        permanent:false,
      }
    }
  }

  return {
      props:{
          home:{car}
      }
  }
}

export default Company