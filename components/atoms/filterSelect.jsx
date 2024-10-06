import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { IoIosClose } from "react-icons/io";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FilterSelect({data,label,onClick,selectedFilter,optionSelect,buttonWidth}) {
    const [bgColorFilter,setbgColorFilter]=useState()
    const handle=(e)=>{

    }
    // console.log(selectedFilter,"selected filter");
    useEffect(()=>{
        if(selectedFilter){
            setbgColorFilter(selectedFilter)
        }

    },[selectedFilter])
  return (<>
 
  <Menu as="div" className={`relative inline-block text-left ${buttonWidth?`w-[${buttonWidth}]`:''}`}>
      <div className='rounded-[50px] shadow-md'>
        <Menu.Button className={`inline-flex w-full whitespace-nowrap  rounded-[50px] justify-center gap-x-1.5  bg-white px-4 py-2 text-sm font-bold  shadow-sm  ${selectedFilter?'border-[#ee4c13] border-2 text-[#ee4c13] ' : 'text-text_headings'} hover:bg-gray-50 hover:text-[#ee4c13]`}>
          {optionSelect?optionSelect:label}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-[#ee4c13]" aria-hidden="true" />
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
        <Menu.Items className="absolute 2xl:right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
        
{
    data?.map((item,i)=>{
        const isSelected = optionSelect?.includes(item.value);
       
        return(<>
         <Menu.Item key={i}>
              {({ active }) => (
                <a
                  href="#"
                  className={`${classNames(
                    active ? 'bg-[#f37243] text-gray-900 hover:text-[#fff]' : 'text-gray-700',
                    ' px-4 py-2 text-sm flex items-center justify-between'
                  ) } ${isSelected?'bg-[#ee4c13] text-white':''}`}
                  name= {label} 
                  value={item?.value}
                  id={item?.id}
                  onClick={(e) => onClick(e,item?.value,item?.id)}
                >
                 {item?.label}
            {/* <span>{isSelected&&<IoIosClose className='w-6 h-6' onClick={(e) => onClick(e,item?.value,item?.id)}/>}</span> */}
            <span></span>
                </a>
              )}
            </Menu.Item>
        </>

        )
    })
}

          
            {/* <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu></>
  )
}
