import Button from '../atoms/button';
import React, { useEffect, useState } from 'react'
import Buttonanimation from './Buttonanimation';

import { useRouter } from 'next/router'
import { redirect } from 'next/dist/server/api-utils';
import  CustomSelect from './CustomSelect';
import CustomSelectmake from './CustomSelect';
// import HostedApi from '../../../dashboard/src/api/axios';

import axios from '../../utils/backendAxios'

const carMakes = ["Toyota", "Honda", "Nissan"];

const carModels = {
    Toyota: ["Camry", "Corolla", "Rav4"],
    Honda: ["Civic", "Accord", "CR-V"],
    Nissan: ["Altima", "Sentra", "Rogue"]
}
const dropDownList = {
    termType: [
        { id: 't1', label: "Short Term", value: 'Short Term', },
        { id: 't2', label: "Long Term", value: 'Long Term' }

    ]
}



const   Dropdown = ({ apiData }) => {
    // let leaseTypeList=dropDownData.leaseTypeList
    // let carBrandList=dropDownData.carBrandList
    // let carModalList=dropDownData.carModalList


    let router = useRouter()
    // console.log(apiData, "apiData...");
    // console.log(apiData.leaseTypeList[0].leaseType, "?????Data...");

    // console.log(carBrandList,"carBrandList");
    // console.log(carModalList,"carModalList");
    const [leaseType, setLeaseType] = useState("Private Lease")
    const [selectedLeaseType, setselectedLeaseType] = useState("")
    const [selectMake, setSelectedMake] = useState("")
    const [selectModel, setSelectedModel] = useState("")
    const [selectseries, setSelectedseries] = useState("")
    const [leaseTerm,setLeaseTerm]=useState('')

    const handleLeaseTypeChange = (e) => {
       
        setLeaseTerm(e)
    }

    const handleMakeChange = (e) => {
      
        setSelectedMake(e)
    }
    const handleSeries = (e) => {
        setSelectedseries(e.target.value)
    }
    const handleLeaseType = async (e) => {
        // console.log(leaseTerm,"LeaseTerm");
        try {
            const leaseTypeBrand = await axios.get(`/carbrand/list?leaseType=${leaseType}&term=${leaseTerm}`)
            // console.log(leaseTypeBrand?.data?.list,"lease type api respond");
            setselectedLeaseType(leaseTypeBrand?.data?.list)

        } catch (e) {

        }
    }

    const handleModelChange = async (e) => {
        // console.log(selectMake,'wdswedwe');
        try {
            const modelSeries = await axios.get(`/carseries/cars/${selectMake}?leaseType=${leaseType}&term=${leaseTerm}`)
            // console.log(modelSeries?.data?.seriesList, "series--- data");
            setSelectedModel(modelSeries?.data?.seriesList)
        } catch (e) {
            console.log(e);
        }
    }
    const redirectPage = () => {

        // console.log(leaseTerm, "leaseTerm Id");
        // console.log(selectMake, "slectmake Id")
        // console.log(selectseries, "series Id ");

    }



    // useEffect(() => {
    //  if(selectMake!==''){
    //         handleModelChange()
    //  }
       
       
    // }, [selectMake])
    useEffect(() => {
      if(leaseTerm !==''){
        handleLeaseType()
      }
       
      
    }, [leaseTerm])
 
    // console.log(selectedLeaseType);


    return (
        <>
           
            <div className='container relative  mt-[-45px] mx-auto px-5  pt-8'>
                <div className='absolute top-[-16px]'>
                    <Button variant="home-next_index_type" label="Private Lease Cars " />
                </div>
                <div className='dropdown_filter  flex flex-wrap  lg:flex-nowrap gap-2.5 shadow-xl bg-white w-fit pt-6 pb-4 px-4 rounded-lg h-auto lg:h-[100px] mr-4  flex-row items-center justify-flexstart'>
                   
                        {/* <select className='bg-[#F3F3F3] text-sm md:text-base font-semibold px-2.5 w-full' value={leaseTerm} onChange={handleLeaseTypeChange}>
                            <option value=''>Select Lease Type</option>
                            {
                                dropDownList?.termType?.map((item) => {

                                    return <option key={item?.id} value={item?.value}>{item?.label}</option>
                                })

                            }
                   
                        </select> */}

                        <CustomSelect
                         label={"Select Lease Type"}
                         options={dropDownList?.termType || []}
                         value={leaseTerm}
                         onChange={handleLeaseTypeChange}
                        />
                

                    {
                       leaseTerm && selectedLeaseType && (
                            <>
                                {/* <label className=' flex rounded p-2.5 bg-[#F3F3F3]  h-12 w-full border border-solid mr-4'>
                                    <select className='bg-[#F3F3F3] text-sm md:text-base w-full px-2.5 font-semibold' value={selectMake} onChange={handleMakeChange}>
                                        <option value=""> Select Car Make </option>

                                        {
                                            selectedLeaseType?.map((make) => (
                                                // console.log(make) ||

                                                <option key={make?._id} value={make?._id}>
                                                    {make?.companyName}
                                                </option>
                                            ))
                                        }
                                    </select>

                                   
                                </label> */}
                                <CustomSelect
                                 label={"Select Car Make"}
                                  options={selectedLeaseType.map((make) => ({
                                             value: make?._id,
                                             label: make?.companyName,
                                           }))}
                                  value={selectMake}
                                  onChange={handleMakeChange}
                                />

                                {
                                    selectModel && selectMake&& (

                                        <label className='flex rounded  bg-[#F3F3F3] p-2.5 h-12 w-full  border border-solid mr-4'>
                                            <select className='bg-[#F3F3F3] text-sm md:text-base w-full px-2.5 font-semibold' value={selectseries} onChange={handleSeries}>
                                                <option value=''>Select car model</option>

                                                {/* {
                                          selectModel?.map((model) => (
                                              <option key={model._id} value={model._id}>
                                                 {model.seriesName}   
                                              </option>
                                          ))
                                       } */}

                                                {
                                                    selectModel?.map((model) => (
                                                        // console.log(model?.seriesName, "nameModel.....") ||
                                                        <option key={model?._id} value={model?._id}>
                                                            {model?.seriesName}
                                                        </option>
                                                    ))
                                                }
                                            </select>
                                        </label>

                                    )
                                }
                            </>
                        )
                    }

                    {/* {
                leaseType === 'longterm' &&(
                    <>
                      <label className='flex rounded w-full h-12   border border-solid mr-4'>
                        <select className='bg-[#F3F3F3] px-4 font-semibold' value={selectMake} onChange={handleMakeChange}>
                            <option> Select Car Make </option>
                            {
                                carMakes.map((make) => (
                                  <option key={make} value={make}>
                                      {make}
                                  </option>
                                ))
                            }
                        </select>
                      </label>

                      {
                          selectMake && (
                          
                               <label className='flex rounded  h-12 w-full border border-solid mr-4'>
                                   <select className='bg-[#F3F3F3] px-4 font-semibold' value={selectModel} onChange={handleModelChange}>
                                       <option>Select car model</option>
                                       {
                                          carModels[selectMake].map((model) => (
                                              <option key={model} value={model}>{model}   
                                              </option>
                                          ))
                                       }
                                   </select>
                               </label>
                        
                         )
                      }
                  </> 
                )
            } */}




                    <Buttonanimation href={`/company/${leaseType}/${leaseTerm}/${selectMake}/${selectseries}`} className=" text-sm font-bold w-auto  whitespace-nowrap" label="Find out more " onClick={redirectPage} />

                </div>
            </div>
        </>
    )

            
        
         
}

export default Dropdown   