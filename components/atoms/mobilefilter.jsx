import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import RangeSlider from "react-range-slider-input";
import { XMarkIcon } from '@heroicons/react/24/outline'
import Button from './button'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import PriceModal from './priceModal'

// const sortOptions = [
//     { name: 'Most Popular', href: '#', current: true },
//     { name: 'Best Rating', href: '#', current: false },
//     { name: 'Newest', href: '#', current: false },
//     { name: 'Price: Low to High', href: '#', current: false },
//     { name: 'Price: High to Low', href: '#', current: false },
// ]
// const subCategories = [
//     { name: 'Totes', href: '#' },
//     { name: 'Backpacks', href: '#' },
//     { name: 'Travel Bags', href: '#' },
//     { name: 'Hip Bags', href: '#' },
//     { name: 'Laptop Sleeves', href: '#' },
// ]
// const filters = [
//     {
//         id: 'color',
//         name: 'Color',
//         options: [
//             { value: 'white', label: 'White', checked: false },
//             { value: 'beige', label: 'Beige', checked: false },
//             { value: 'blue', label: 'Blue', checked: true },
//             { value: 'brown', label: 'Brown', checked: false },
//             { value: 'green', label: 'Green', checked: false },
//             { value: 'purple', label: 'Purple', checked: false },
//         ],
//     },
//     {
//         id: 'category',
//         name: 'Category',
//         options: [
//             { value: 'new-arrivals', label: 'New Arrivals', checked: false },
//             { value: 'sale', label: 'Sale', checked: false },
//             { value: 'travel', label: 'Travel', checked: true },
//             { value: 'organization', label: 'Organization', checked: false },
//             { value: 'accessories', label: 'Accessories', checked: false },
//         ],
//     },
//     {
//         id: 'size',
//         name: 'Size',
//         options: [
//             { value: '2l', label: '2L', checked: false },
//             { value: '6l', label: '6L', checked: false },
//             { value: '12l', label: '12L', checked: false },
//             { value: '18l', label: '18L', checked: false },
//             { value: '20l', label: '20L', checked: false },
//             { value: '40l', label: '40L', checked: true },
//         ],
//     },
// ]
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
const Mobilefilter = ({ setfiltersbymob, onChange,priceRangeSelect }) => {
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
                                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-[#b46a11] text-white p-2"
                                        onClick={() => setMobileFiltersOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Filters */}

                                {/* <form className="mt-4 border-t border-gray-200">
                                    <h3 className="sr-only">Categories</h3>
                                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                        {subCategories.map((category) => (
                                            <li key={category.name}>
                                                <a href={category.href} className="block px-2 py-3">
                                                    {category.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>

                                    {filters.map((section) => (
                                        <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-mx-2 -my-3 flow-root">
                                                        <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                            <span className="font-medium text-gray-900">{section.name}</span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                ) : (
                                                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </h3>
                                                    <Disclosure.Panel className="pt-6">
                                                        <div className="space-y-6">
                                                            {section.options.map((option, optionIdx) => (
                                                                <div key={option.value} className="flex items-center">
                                                                    <input
                                                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                        name={`${section.id}[]`}
                                                                        defaultValue={option.value}
                                                                        type="checkbox"
                                                                        defaultChecked={option.checked}
                                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                    />
                                                                    <label
                                                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                    >
                                                                        {option.label}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </form> */}

                                <div className="p-4 m-2.5 " style={{ background: "rgb(180 107 15)", borderRadius: "18px" }}>
                                    <h2 className="text-xl text-white font-bold p-2">Filters</h2>
                                    <div className='flex bg-[#F3F3F3] p-5 w-full h-12 rounded border-solid mr-4 mt-2 lg:mt-0'>

                                        <RangeSlider id="range-slider-yellow" min="0" max="30000" step="500" tooltip="true" defaultValue={modalPrice} onInput={(e) => {
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

                                    <label className='flex bg-[#F3F3F3] p-2.5 w-full h-12 rounded border-solid mr-4 mt-2 lg:mt-0'>
                                        <select className='bg-[#F3F3F3] text-sm md:text-base font-semibold px-2.5 w-full' name="Mileage" onChange={onChange}>
                                            <option value=''>Mileage</option>
                                            {
                                                sidebarFilter?.mileageFilter.map((item) => {

                                                    return <option key={item?.id} value={item?.value}>{item?.label}</option>
                                                })

                                            }


                                        </select>
                                    </label>


                                    <label className='flex bg-[#F3F3F3] p-2.5 w-full h-12 rounded border-solid mr-4 mt-2 lg:mt-0'>
                                        <select className='bg-[#F3F3F3] text-sm md:text-base font-semibold px-2.5 w-full' name="Body" onChange={onChange}>
                                            <option value=''>Body Type</option>
                                            {
                                                sidebarFilter?.bodyFilter.map((item) => {

                                                    return <option key={item?.id} value={item?.value}>{item?.label}</option>
                                                })

                                            }

                                        </select>
                                    </label>



                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <main className="mx-auto max-w-7xl px-4  lg:px-8">


                <div className="flex items-center">
                    {/* <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sort
                                    <ChevronDownIcon
                                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <Menu.Item key={option.name}>
                                                {({ active }) => (
                                                    <a
                                                        href={option.href}
                                                        className={classNames(
                                                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        {option.name}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu> */}


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
export default Mobilefilter