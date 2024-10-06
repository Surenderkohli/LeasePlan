import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import PriceRange from './priceRange'
import { XMarkIcon } from '@heroicons/react/24/outline'
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PriceModal({ priceRangeSelect, modalOpen, onClose }) {
    const [modalPrice, setModalPrice] = useState()
    const cancelButtonRef = useRef(null)
    const handlePriceSelect = () => {
        (modalPrice)? 
           ( priceRangeSelect(modalPrice),
            onClose()):toast.warn('Select Price')
        
    
    };
        const handlePriceDeselectSelect = () => {
            if (modalPrice) {
                priceRangeSelect()
                setModalPrice()
                onClose()
            }};

    const handleInput = (e) => {
        
        setModalPrice(e)
        console.log(e);
       
    };

   
   
    return (<>
        <Transition.Root show={modalOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14  sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                    <button
                                        type="button"
                                        className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-4"
                                        onClick={onClose}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">

                                    <div className="sm:flex sm:items-start">
                                        {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                        </div> */}
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                            {/* <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Deactivate account
                      </Dialog.Title> */}
                                            <div className="mt-2">
                                                <div className='flex items-center bg-[#F3F3F3] p-2.5 w-full h-12 rounded border-solid mr-4 mt-2 lg:mt-0'>

                                                    <label className='mr-[18px]'> Price </label>
                                                    {/* <PriceRange priceRangeSelect={(e) => handlePriceSelect(e)} /> */}
                                                    <RangeSlider id="range-slider-yellow" min="0" max="30000" step="500" defaultValue={modalPrice} tooltip="true" onInput={(e) => {
                                                        handleInput(e);
                                                    }} />
                                                </div>
                                                <div className='flex p-2.5 justify-between'>

                                                  
                                                    {
                                                        modalPrice && (<>
                                                            <div>Min price:{modalPrice[0]}</div>
                                                            <div>Max price:{modalPrice[1]}</div>
                                                        </>)

                                                    }


                                                  

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        onClick={() => handlePriceSelect()}
                                    >
                                        Apply
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={()=>handlePriceDeselectSelect()}
                                        ref={cancelButtonRef}
                                    >
                                        Clear
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
                <ToastContainer/>
            </Dialog>
           
        </Transition.Root>
       
       </>
    )
}
