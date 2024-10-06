import { useRouter } from "next/router";
import Link from "next/link";
import { useState, Fragment, useEffect } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
// import { Turn as Hamburger } from 'hamburger-react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const links = [
    {
        label: "Private Lease",
        url: "/",
        menuItem: [],
        current: true 
    },


]
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    const router = useRouter();
    const [hover, setHover] = useState(null)
    const [openItem, setOpenItem] = useState(false)
    const [ showbackground, setShowBackground] = useState(true)


    const handleChangescroll = () => {
        if(window.scrollY >= 180){
            setShowBackground(false)
        }
        else {
            setShowBackground(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleChangescroll)
    })

    const handCick = () => {
        setOpenItem(!openItem)
    }

    return (
        // <header className="fixed z-[10] w-full text-lg text-white top-0 h-[110px] font-medium" style={{ backgroundColor: `#34383726`}}>
        //     <div class="container mx-auto relative lg:flex flex-row py-4 items-center justify-between">
        //     <div>
        //     <Link href="/">
        //        <img src="/icons/logo.svg" />
        //     </Link>
        //     </div>
        //     <div className="flex flex-row lg:gap-20">
        //      <nav className="flex flex-row gap-10 items-center">
        //           {
        //             links.map((link) => {

        //               return(
        //                 <Link key={link.url} href={link.url}>

        //                     {link.label}

        //                 </Link>
        //               )

        //             })
        //           }
        //       </nav>
        //      </div>
        //     </div>
        //  </header>
        <Disclosure as="nav" className={ showbackground? 'fixed z-[10] w-full text-lg text-white top-0  font-medium shadow-xl  border-b-[#dddddd] bg-white ' : "fixed z-[10] w-full text-lg text-white top-0  font-medium  shadow-xl border-b-[#dddddd] bg-white"} >
            {({ open }) => (
                <>
                    <div className=" header_container container mx-auto px-5  relative lg:flex flex-row  items-center justify-between">
                        <div className="relative flex h-16  justify-between w-full">
                            <div className="absolute inset-y-0 right-0 flex items-center hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2  hover:bg-gray-700 text-white focus:outline-none  focus:ring-inset">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6 text-sm md:text-base" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6 text-sm md:text-base" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-between items-stretch lg:justify-between">
                                <div className="flex flex-shrink-0  items-center">
                                    {/* <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    /> */}
                                    {/* <Link href="/">
                                        <img src="/images/sitelogo.svg" className="relative bottom-3 lg:h-auto sm:h-[103px] h-[95px]"/>
                                    </Link> */}
                                    <Link href="/">
                                        <img src="/images/sitelogo_new.svg" className=""/>
                                    </Link>
                                    {/* <img
                                        className="hidden h-8 w-auto md:block"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    /> */}
                                </div>

{/* navlinks *****/}
                                {/* <div className="sm:ml-6 block self-center hidden">
                                    <div className="flex space-x-4">
                                        {links.map((link) => (
                                            <Link
                                            key={link.url} href={link.url}
                                                className={classNames(
                                                    link.current ? 'border-b-4 border-orange-500 text-orange-500' : ' hover:border-b-4 border-orange-500 text-orange-500',
                                                    'rounded-md px-3 py-2 text-sm font-medium md:text-base lg:text-lg'
                                                )}
                                                aria-current={link.current ? 'page' : undefined}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div> */}
                            </div>   
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden relative bottom-1 max-w-md ml-auto" style={{background:"#101827"}}>
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {links.map((link) => (
                                <Disclosure.Button
                                key={link.url} href={link.url}
                                    as="a"
                                   
                                    className={classNames('text-gray-300 hover:bg-orange-500 hover:text-white',
                                        'block rounded-md px-3 py-2 text-sm md:text-base font-medium'
                                    )}
                                    aria-current={link.current ? 'page' : undefined}
                                >
                                    {link.label}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

const Whiteheader = ({showHeader,navHide}) => {
    const router = useRouter();
    const [hover, setHover] = useState(null)
    const [openItem, setOpenItem] = useState(false)
    



    const handCick = () => {
        setOpenItem(!openItem)
    }

    return (
        // <header className="fixed shadow-lg z-[10] w-full top-0 text-lg text-black h-[110px] font-medium bg-white" >
        //     <div class="container mx-auto relative lg:flex flex-row py-4 items-center justify-between">
        //         <div>
        //             <Link href="/">
        //                 <img src="/icons/logo.svg" />
        //             </Link>
        //         </div>
        //         <div className="flex flex-row lg:gap-20">
        //             <nav className="flex flex-row gap-10 items-center">
        //                 {
        //                     links.map((link) => {

        //                         return (
        //                             <Link key={link.url} href={link.url}>

        //                                 {link.label}

        //                             </Link>
        //                         )

        //                     })
        //                 }
        //             </nav>
        //         </div>
        //     </div>
        // </header>
      <>{navHide?<Disclosure as="nav" className={`transition-opacity duration-300 ${showHeader ? 'opacity-100 block' : 'opacity-0 hidden'} fixed z-[10] w-full top-0 text-lg text-black font-medium shadow-xl  border-b-[#dddddd] bg-white`}>
        
       
        
        {({ open }) => (
            <>
                <div className={` header_container container mx-auto px-5  relative lg:flex flex-row  items-center justify-between`}>
                    <div className="relative flex h-16  justify-between w-full">
                        <div className="absolute inset-y-0 right-0 flex items-center hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2  hover:bg-gray-700 text-black focus:outline-none  focus:ring-inset">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex flex-1 items-center justify-between  items-stretch lg:justify-between lg:px-5 xl:px-0">
                            <div className={`flex flex-shrink-0 items-center`}>
                                {/* <img
                                    className="block h-8 w-auto lg:hidden"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                    alt="Your Company"
                                /> */}
                                <Link href="/">
                                        <img src="/images/sitelogo_new.svg" className=""/>
                                    </Link>
                                {/* <img
                                    className="hidden h-8 w-auto md:block"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                    alt="Your Company"
                                /> */}
                            </div>
                            {/* <div className=" sm:ml-6 block self-center">
                                <div className="flex space-x-4">
                                {links.map((link) => (
                                            <Link
                                            key={link.url} href={link.url}
                                                className={classNames(
                                                    link.current ? 'border-b-4 border-orange-500' : ' hover:border-b-4 border-orange-500 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium md:text-base lg:text-lg'
                                                )}
                                                aria-current={link.current ? 'page' : undefined}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                </div>
                            </div> */}
                        </div>
                        
                       
                    </div>
                </div>

                <Disclosure.Panel className="lg:hidden relative bottom-1 max-w-md ml-auto bg-white">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {links.map((link) => (
                            <Disclosure.Button
                            key={link.url} href={link.url}
                                as="a"
                               
                                className={classNames(
                                    'text-black hover:bg-orange-500 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium'
                                )}
                                aria-current={link.current ? 'page' : undefined}
                            >
                                {link.label}
                            </Disclosure.Button>
                        ))}
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>:<Disclosure as="nav" className={`fixed z-[10] w-full top-0 text-lg text-black font-medium shadow-xl border border-b-[#dddddd] bg-white`}>
        
       
        
        {({ open }) => (
            <>
                <div className={` header_container container mx-auto px-5 relative lg:flex flex-row  items-center justify-between`}>
                    <div className="relative flex h-16  justify-between w-full">
                        <div className="absolute inset-y-0 right-0 flex items-center hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2  hover:bg-gray-700 text-black focus:outline-none  focus:ring-inset">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex flex-1 items-center justify-between  items-stretch lg:justify-between lg:px-5 xl:px-0">
                            <div className={`flex flex-shrink-0 items-center`}>
                                {/* <img
                                    className="block h-8 w-auto lg:hidden"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                    alt="Your Company"
                                /> */}
                                <Link href="/">
                                        <img src="/images/sitelogo_new.svg" className=""/>
                                    </Link>
                                {/* <img
                                    className="hidden h-8 w-auto md:block"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                    alt="Your Company"
                                /> */}
                            </div>
                            {/* <div className=" sm:ml-6 block self-center">
                                <div className="flex space-x-4">
                                {links.map((link) => (
                                            <Link
                                            key={link.url} href={link.url}
                                                className={classNames(
                                                    link.current ? 'border-b-4 border-orange-500' : ' hover:border-b-4 border-orange-500 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium md:text-base lg:text-lg'
                                                )}
                                                aria-current={link.current ? 'page' : undefined}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                </div>
                            </div> */}
                        </div>
                        
                       
                    </div>
                </div>

                <Disclosure.Panel className="lg:hidden relative bottom-1 max-w-md ml-auto bg-white">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {links.map((link) => (
                            <Disclosure.Button
                            key={link.url} href={link.url}
                                as="a"
                               
                                className={classNames(
                                    'text-black hover:bg-orange-500 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium'
                                )}
                                aria-current={link.current ? 'page' : undefined}
                            >
                                {link.label}
                            </Disclosure.Button>
                        ))}
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>}</>
    )




}

Header.Whiteheader = Whiteheader



export default Header
