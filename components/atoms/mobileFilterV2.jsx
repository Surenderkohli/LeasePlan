import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'

import { XMarkIcon } from '@heroicons/react/24/outline'
import Button from './button'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import PriceModal from './priceModal'
import FilterSelect from './filterSelect';
import { RiDeleteBin5Line } from "react-icons/ri";
import RangeSlider from './rangeSlider'


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

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


  
const MobileFilterV2 = ({filterClick,priceRangeSelect,sidebarFilter,filter,resetAll  }) => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalPrice, setModalPrice] = useState()




    const handleInput = (e) => {
        priceRangeSelect(e)
        setModalPrice(e)
        console.log(e);

    };


    // const cancelButtonRef = useRef(null)
    const filterclose = () => {
        setOpen(false)
        setfiltersbymob(false)
    }
    return (<><div className="">
        <div>
            {/* Mobile filter dialog */}
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 md:hidden" onClose={setMobileFiltersOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-transparent py-4 pb-12 shadow-xl">
                                <div className="flex items-center justify-between px-4">
                                    <h2 className="text-lg font-medium text-white"></h2>
                                    <button
                                        type="button"
                                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-[#f06400] text-[#fff] p-2"
                                        onClick={() => setMobileFiltersOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Filters */}



                                <div className="p-4 m-2.5 " style={{ background: "#f06400", borderRadius: "18px" }}>
                                    <h2 className="text-xl text-white font-bold p-2">Filter</h2>
                                    <div className='flex flex-col gap-y-2 items-center'>
                                        <FilterSelect data={sidebarFilter?.mileageFilter} label={'Mileage'} onClick={filterClick} selectedFilter={filter?.Mileage && filter !== ''} optionSelect={filter?.Mileage} buttonWidth={'80%'} />
                                        <FilterSelect data={sidebarFilter?.bodyFilter} label={'Body'} onClick={filterClick} selectedFilter={filter?.Body && filter !== ''} optionSelect={filter?.Body} buttonWidth={'80%'}/>
                                        <RangeSlider.DualRangeSlider priceRangeSelect={priceRangeSelect} selectedFilter={filter?.PriceMax && filter?.PriceMin !== ''} optionSelect={{ PriceMin: filter?.PriceMin, PriceMax: filter?.PriceMax }}  buttonWidth={'80%'} />
                                        {/* <div className={`w-12 h-8 rounded-[50px]  flex items-center justify-center ${filter?.Mileage||filter?.Body||filter?.PriceMax?'bg-white shadow-md':'bg-[#eeeeee] border border-[#d0cfcf] shadow-md'}`}> */}
                                        <button className={` text-sm font-bold px-5 py-2 rounded-[50px]  flex items-center justify-center ${filter?.Mileage || filter?.Body || filter?.PriceMax ? 'bg-white shadow-md' : 'bg-[#eeeeee] border border-[#d0cfcf] shadow-md'}`} disabled={filter?.Mileage || filter?.Body || filter?.PriceMax ? false : true} onClick={resetAll}><span className={`${filter?.Mileage || filter?.Body || filter?.PriceMax ? 'text-[#034a5e] ' : 'text-[#989a9a] '}`}>Clear</span></button>
                                        {/* <RiDeleteBin5Line  className={`${filter?.Mileage||filter?.Body||filter?.PriceMax?'text-[#034a5e] cursor-pointer':'text-[#989a9a] cursor-not-allowed'}`} onClick={resetAll}/> */}

                                        {/* </div> */}
                                    </div>


                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <main className="mx-auto max-w-7xl px-4  lg:px-8">


                <div className="flex items-center">
                
                     


                    {/* <button
                        type="button"
                        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                        onClick={() => setMobileFiltersOpen(true)}
                    >
                        <span className="sr-only">Filters</span>
                        <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                    </button> */}
                    <button className="-m-2 ml-4 p-2 px-4 lg:hidden  md:h-12 h-10 right-0 top-0 text-white bg-orange-500 rounded-lg " onClick={() => setMobileFiltersOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                    </button>

                </div>



            </main>
        </div>
    </div>
    </>

    )
}
export default MobileFilterV2