import Link from "next/link"
import Button from './button'
import classNames from 'classnames'
import { useState } from "react"
import Image from "next/image"

const BoxGrid = ({ image, carname, carmodel, price, month, monthmileage, cartype, gas, fuel, mileage, hreflink, className }) => {
  const [hover, setHover] = useState(false)

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <div className={classNames("Block  mt-6 mb-6 border border-[#dadee5] hover:shadow-[0px_4px_26px_#d0d3d9] cursor-pointer  w-72  bg-white rounded-2xl  flex-wrap gap-y-5  h-full items-center  p-4 ", className)}>
        <div className="w-full Block gap-4 items-center relative">
          <img src={image} className="w-full h-44 rounded-lg object-cover" />

          {/* Add the "Best deals" sentence */}
          {/* <div className="w-25 h-9 bg-[#02485C] border-white border-dashed  rounded-full p-2 rounded-tr-none absolute top-0 right-0" style={{ border: "2px solid white",borderStyle: "solid"}}>
      <p className="font-Libre font-semibold text-sm text-white">Best Deals</p>
    </div> */}

          <div className="flex justify-between">
            <div>
              <h2 className="font-Libre font-semibold mt-3 text-lg">{carname}</h2>
              <p className="font-Libre font-normal text-base mt-px">{carmodel}</p>
            </div>

            <div className="text-cyan-900 font-semibold text-sm md:text-base mt-3">{price}</div>
          </div>
        </div>



        <div className="mt-3 ">
          <div className="flex flex-wrap mt-1 justify-between w-full">
            <p className="font-Libre text-cyan-900 font-normal text-sm md:text-base mt-px">{month}&nbsp;Month </p>
            <p className="font-Libre text-cyan-900 font-normal text-sm md:text-base mt-px">{monthmileage}&nbsp;Annual mileage</p>
          </div>
          <hr size="8" width="100%" color="red"></hr>
        </div>

        <div className="flex flex-wrap justify-between mt-6 mb-6  w-full">
          <div>
            <img src="/images/cartype.png" className="m-auto" />
            <p className="text-sm  md:text-base">{Capitalize(cartype)}</p>
          </div>
          <div>
            <img src="/images/fuel.png" />
            <p className="text-sm md:text-base">{Capitalize(gas)}</p>
          </div>

          <div>
            <img src="/images/gas.png" />
            <p className="text-sm md:text-base">{Capitalize(fuel)}</p>
          </div>

          <div>
            <img src="/images/mileage.png" />
            <p className="text-sm md:text-base text-center">{mileage}</p>
          </div>

        </div>


        <div className="w-full mt-3 mb-3 justify-center flex gap-4 items-center">
          <Link href={hreflink}>
            <Button variant="primary-orange-next" label="View Details" />
          </Link>
        </div>
      </div>
    </>
  )
}


const Boxinventory = ({ image, carname, cardetails, price, carmodel, month, monthmileage, cartype, gas, fuel, mileage, hreflink, car_id, onClick }) => {
  const [hover, setHover] = useState(false)
  return (
    <>
      <div className="grid grid-cols-3 mb-6 h-72 justify-center  hover:border-[#faa051] hover:border-2 cursor-pointer bg-white rounded-2xl  border-inherit  h-[auto] flex-wrap gap-y-5 md:flex-nowrap w-full h-auto  border-2 border-[#D4D4D4] p-8 ">
        <div className="w-full flex justify-center items-end gap-4 ">
          <img src={image} className="w-[350px] p-2 realtive h-[220px] rounded-[15px]" />

          <div className="  absolute justify-center  flex gap-4 items-center">
            <Link href={hreflink}>
              <Button variant="white" label="View Details " id={car_id} onClick={onClick} />
            </Link>
          </div>
        </div>

        <div className="block col-span-2 pl-1 p-4 item-center">
          <div className="flex flex-wrap justify-between px-8">
            <h2 className="font-Libre font-semibold text-lg lg:text-xl">{carname}</h2>
            <p className="font-Libre font-normal text-lg lg:text-xl mt-px">{carmodel}</p>
          </div>
          <div className="text-cyan-900 font-normal text-sm md:text-base mt-3">{price}</div>
          <div className="w-full h-32 pt-2 pb-4">
            <p className="font-Libre font-normal text-sm md:text-base mt-px ml-9">{cardetails}</p>
          </div>
          {/* <div className="flex justify-between w-full">
        <p className="font-Libre font-normal text-lg mt-px">{month}</p>
        <p className="font-Libre font-normal text-lg mt-px">{monthmileage}</p>
        </div> */}

          <div className="flex flex-wrap justify-around  w-full">
            <div className="text-sm text-center">
              <img src="/images/cartype.png" />
              <p className="text-sm">{cartype}</p>
            </div>
            <div className="text-sm text-center">
              <img src="/images/fuel.png" />
              <p className="text-sm">{gas}</p>
            </div>

            <div className="text-sm text-center">
              <img src="/images/gas.png" />
              <p className="text-sm">{fuel}</p>
            </div>

            <div className="text-sm text-center">
              <img src="/images/mileage.png" />
              <p>{mileage}</p>
            </div>

          </div>

        </div>

      </div>

    </>
  )
}

const BoxGridInventory = ({ image, price, carname, carmodel, month, monthmileage, cartype, gas, fuel, mileage, hreflink }) => {
  const [hover, setHover] = useState(false)

  const Capitalize = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
  }

  return (
    <>
      <div className="Block  mt-6 mb-6 hover:border-slate-400  cursor-pointer   h-1/2 bg-white rounded-2xl   h-auto flex-wrap gap-y-5  h-full items-center border-2 shadow-xl  p-4 ">
        <div className="w-full Block gap-4 items-center">
          <img src={image} className="w-full object-cover min-h-[140px] md:min-h-[224px] max-h-56 rounded-lg" />
          <div className="flex justify-between">
            <div>
              <h2 className="font-Libre font-semibold mt-3 text-lg">{carname}</h2>
              <p className="font-Libre font-normal  text-base mt-px">{carmodel}</p>
            </div>

            <div className="text-cyan-900 font-semibold text-sm md:text-base mt-3">{price}</div>
          </div>
        </div>

        <div className="mt-3 ">
          <div className="flex flex-wrap mt-1 justify-between w-full">
            <p className="font-Libre text-cyan-900 font-normal text-sm md:text-base mt-px">{month}&nbsp;Month </p>
            <p className="font-Libre text-cyan-900 font-normal text-sm md:text-base mt-px">{monthmileage}&nbsp;Annual mileage</p>
          </div>
          <hr size="8" width="100%" color="red"></hr>
        </div>

        <div className="flex flex-wrap justify-between mt-6 mb-6  w-full">
          <div>
            <img src="/images/cartype.png" className="m-auto" />
            <p className="text-sm  md:text-base">{Capitalize(cartype)}</p>
          </div>
          <div>
            <img src="/images/fuel.png" />
            <p className="text-sm md:text-base">{Capitalize(gas)}</p>
          </div>

          <div>
            <img src="/images/gas.png" />
            <p className="text-sm md:text-base">{Capitalize(fuel)}</p>
          </div>

          <div>
            <img src="/images/mileage.png" />
            <p className="text-sm md:text-base text-center">{mileage}</p>
          </div>

        </div>


        <div className="w-full mt-3 mb-3 justify-center flex gap-4 items-center">
          <Link href={hreflink}>
            <Button variant="primary-orange-next" label="View Details" />
          </Link>
        </div>
      </div>
    </>
  )
}

const BoxGridCard = ({ image, price, carname, carmodel, month, monthmileage, cartype, gas, fuel, mileage, hreflink }) => {
  const [hover, setHover] = useState(false)
  const [error, setError] = useState(false);
  const Capitalize = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
  }
  // const handleError = (e) => {
  //   e.target.onerror = null; // Avoid infinite loop in case the fallback image also fails to load
  //   e.target.srcset = '/images/car_png1.png';
  // };



  const handleError = () => {
    setError(true);
  };

  return (
    <>
      <div className="Block  mt-6 mb-6  cursor-pointer  w-[295px]   bg-white rounded-2xl    flex-wrap gap-y-5  items-center  shadow-xl hover:shadow-xl hover:shadow-[#bcbcbc]  relative box_card overflow-hidden">
        {/* <div className="w-full Block gap-4 items-center">
          <img src={image} className="w-full object-cover min-h-[140px] md:min-h-[224px] max-h-56 rounded-lg" />
          <div className="flex justify-between">
          <div>
          <h2 className="font-Libre font-semibold mt-3 text-lg">{carname}</h2>
          <p className="font-Libre font-normal  text-base mt-px">{carmodel}</p>
          </div>

          <div className="text-cyan-900 font-semibold text-sm md:text-base mt-3">{price}</div>
           </div>
        </div>

        <div className="mt-3 ">
          <div className="flex flex-wrap mt-1 justify-between w-full">
            <p className="font-Libre text-cyan-900 font-normal text-sm md:text-base mt-px">{month}&nbsp;Month </p>
            <p className="font-Libre text-cyan-900 font-normal text-sm md:text-base mt-px">{monthmileage}&nbsp;Annual mileage</p>
          </div>
          <hr size="8" width="100%" color="red"></hr>
        </div>

        <div className="flex flex-wrap justify-between mt-6 mb-6  w-full">
          <div>
            <img src="/images/cartype.png" className="m-auto" />
            <p className="text-sm  md:text-base">{Capitalize(cartype)}</p>
          </div>
          <div>
            <img src="/images/fuel.png" />
            <p className="text-sm md:text-base">{Capitalize(gas)}</p>
          </div>

          <div>
            <img src="/images/gas.png" />
            <p className="text-sm md:text-base">{Capitalize(fuel)}</p>
          </div>

          <div>
            <img src="/images/mileage.png" />
            <p className="text-sm md:text-base text-center">{mileage}</p>
          </div>

        </div>


        <div className="w-full mt-3 mb-3 justify-center flex gap-4 items-center">
          <Link href={hreflink}>
            <Button variant="primary-orange-next" label="View Details" />
          </Link>
        </div> */}
        <div className="relative z-[1]">
          <div className="flex justify-end">
          {/* <p className="text-[#004A5D] text-right py-[10px] px-[14px] inline-block bg-white rounded-[30px] text-xs absolute top-[10px] right-[10px]">Best Deal</p> */}
          </div>
      
          <img src={image}  alt="best_deal"  className="mx-auto w-full object-cover min-h-[140px] md:min-h-[224px] max-h-56"/>
          {/* {
            error? <Image src={image} alt="best_deal" width={198} height={102} className="mx-12 mt-12"   onError={handleError}/>
          }
          <img src={'/images/car_png1.png'}  alt="best_deal"  className="mx-auto w-full object-cover min-h-[140px] md:min-h-[224px] max-h-56"/>
           */}
          {/* <Image src={image} alt="best_deal" width={198} height={102} className="mx-12 mt-12"   onError={handleError}/> */}
          <div className="flex justify-between z-[99] px-[18px]">
            <div className="">
              <h2 className="font-Libre font-bold mt-3 text-[20px] text-[#3D3D3D] ">{carname}</h2>
              <p className="font-Libre font-normal text-[#6F6F6F] text-base mt-px">{carmodel}</p>
            </div>

            {/* <div className="text-cyan-900 font-semibold text-sm md:text-base mt-3">{price}</div> */}
          </div>
          <h3 className="text-[#02485C] text-[40px] font-bold  px-[18px]">{price}</h3>
          
        </div>
        <div className="px-[18px]">
          <div className="flex flex-wrap mt-1 justify-between w-full">
            <p className="font-Libre text-cyan-900 font-normal text-sm md:text-base mt-px">{month}&nbsp;Month </p>
            <p className="font-Libre text-cyan-900 font-normal text-sm md:text-base mt-px">{monthmileage/1000}k&nbsp;Annual mileage</p>
          </div>
          <hr size="8" width="100%" color="red"></hr>
        </div>

        <div className="flex flex-wrap justify-between mt-6 mb-6  w-full px-[18px]">
          <div>
            <img src="/images/car_type.svg" className="m-auto" />
            <p className="text-xs text-center">{Capitalize(cartype)}</p>
          </div>
          <div>
            <img src="/images/fuel.svg" />
            <p className="text-xs text-center">{Capitalize(gas)}</p>
          </div>

          <div>
            <img src="/images/co2.svg" />
            <p className="text-xs text-center">{Capitalize(fuel)}</p>
          </div>

          <div>
            <img src="/images/mileage.svg" />
            <p className="text-xs text-center">{mileage}</p>
          </div>

        </div>

        <div className="w-full mt-3 mb-3 justify-center flex gap-4 items-center pb-[26px]">
          <Link href={hreflink}>
            <Button variant="primary-orange-next" label="View Details" />
          </Link>
        </div>




      </div>
    </>
  )
}
const BoxGridCard_index = ({ image, price, carname, carmodel, month, monthmileage, cartype, gas, fuel, mileage, hreflink,cardWidth,cardPadding }) => {
  const [hover, setHover] = useState(false)
  const [error, setError] = useState(false);
  const Capitalize = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1);
  }
  // const handleError = (e) => {
  //   e.target.onerror = null; // Avoid infinite loop in case the fallback image also fails to load
  //   e.target.srcset = '/images/car_png1.png';
  // };



  const handleError = () => {
    setError(true);
  };

  return (
    <><div className={`${cardPadding?cardPadding:''}`}>
      <div className={`Block ${cardWidth?cardWidth:''} bg-white rounded-2xl flex-wrap gap-y-5 items-center shadow-xl hover:shadow-[0px_4px_30px_#bcbcbc] relative box_card overflow-hidden`}>
  
        <div className="relative z-[1]">
          <div className="flex justify-end">
          {/* <p className="text-[#004A5D] text-right py-[10px] px-[14px] inline-block bg-white rounded-[30px] text-xs absolute top-[10px] right-[10px]">Best Deal</p> */}
          </div>
          <div className="h-[197px]">
          <img src={image}  alt="best_deal"  className="mx-auto w-full object-cover h-full"/>
          </div>
          {/* {
            error? <Image src={image} alt="best_deal" width={198} height={102} className="mx-12 mt-12"   onError={handleError}/>
          }
          <img src={'/images/car_png1.png'}  alt="best_deal"  className="mx-auto w-full object-cover min-h-[140px] md:min-h-[224px] max-h-56"/>
           */}
          {/* <Image src={image} alt="best_deal" width={198} height={102} className="mx-12 mt-12"   onError={handleError}/> */}
          <div className="flex justify-between z-[99] px-6">
            <div className="">
              <h2 className=" font-bold mt-3 text-[20px] text-text_headings">{carname}</h2>
              <p className=" font-normal text-text_darkgrey text-sm mt-px">{carmodel}</p>
            </div>

            {/* <div className="text-cyan-900 font-semibold text-sm md:text-base mt-3">{price}</div> */}
          </div>
          <h3 className="text-text_headings text-[40px] font-bold font-third px-6">{price}</h3>
          
        </div>
        {/* <div className="px-[18px]">
          <div className="flex flex-wrap mt-1 justify-between w-full">
            <p className="font-Libre text-cyan-900 font-normal text-sm md:text-base mt-px">{month}&nbsp;Month </p>
            <p className="font-Libre text-cyan-900 font-normal text-sm md:text-base mt-px">{monthmileage/1000}k&nbsp;Annual mileage</p>
          </div>
          <hr size="8" width="100%" color="red"></hr>
        </div> */}

        {/* <div className="flex flex-wrap justify-between mt-6 mb-6  w-full px-[18px]">
          <div>
            <img src="/images/car_type.svg" className="m-auto" />
            <p className="text-xs text-center">{Capitalize(cartype)}</p>
          </div>
          <div>
            <img src="/images/fuel.svg" />
            <p className="text-xs text-center">{Capitalize(gas)}</p>
          </div>

          <div>
            <img src="/images/co2.svg" />
            <p className="text-xs text-center">{Capitalize(fuel)}</p>
          </div>

          <div>
            <img src="/images/mileage.svg" />
            <p className="text-xs text-center">{mileage}</p>
          </div>

        </div> */}

        <div className="w-full justify-center flex flex-col items-center pb-[26px] px-6">
          <Link href={hreflink} className="w-full">
            <Button variant="primary-orange-nextCard" label="View Details" />
          </Link>
          <p className="text-text_naturalgrey text-[12px] font-normal font-primary pt-2">based on {month} months & {monthmileage} km</p>
        </div>




      </div></div>
    </>
  )
}

BoxGrid.BoxGridCard_index=BoxGridCard_index
BoxGrid.BoxGridCard = BoxGridCard
BoxGrid.BoxGridInventory = BoxGridInventory

BoxGrid.Boxinventory = Boxinventory



export default BoxGrid
