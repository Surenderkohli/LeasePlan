import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Typography from "@mui/material/Typography";
// const marks = [
//   {
//     value: 10,

//   },
//   {
//     value: 20,

//   },
//   {
//     value: 47,

//   },
//   {
//     value: 50,

//   },
//   {
//     value: 77,

//   },
//   {
//     value: 84,

//   },
//   {
//     value: 100,

//   },
// ];
// console.log(marks,'marks..');
function valuetext(value) {
  return `${value}°C`;
}



const RangeSlider = ({ setSelectedDuration, marks, type, combinationValue, setRangeSelectNumber, defaultValue, getDefault, Value, disabled }) => {
  const [showValueLabel, setShowValueLabel] = useState(false);
  const [labelDisplay, setLabelDisplay] = useState();
  const handleChange = (event, newValue) => {
    getDefault(type, newValue)


    // setValueLabelDisplay(true)
    // setTimeout(() => {

    //   // setValueLabelDisplay('auto')
    //   setValueLabelDisplay(false)
    // }, 1000);
    // `newValue` contains the selected value of the Slider
    // setSelectedDuration(newValue)
    // console.log(type, newValue, 'handlechange........');
    // setRangeSelectNumber({ type, newValue })

    // console.log(newValue,'valuetext',event,'event');
  };

  const firstMark = marks && marks[0]?.value;
  const lastMark = marks && marks[marks?.length - 1]?.value;
  function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}

        <span className="airbnb-bar h-2 w-[1px] bg-[#ed8b00] mx-[1px]" />
        <span className="airbnb-bar h-2 w-[1px] bg-[#ed8b00] mx-[1px]" />
      </SliderThumb>
    );
  }


  // console.log(defaultValue);
  return (
    <Box sx={{ width: 300 }}
      onClick={() => {
        if (disabled) {
          setShowValueLabel(true);
          setLabelDisplay('on')
          setTimeout(() => {
            setShowValueLabel(false);
            // setValueLabelDisplay('auto')
            setLabelDisplay('auto')
          }, 3000);
        }
      }}
      className=""
    >
      <Slider
        slots={{ thumb: AirbnbThumbComponent }}
        aria-label="Restricted values"
        // defaultValue={defaultValue}
        getAriaValueText={valuetext}
        value={Value ? Value : defaultValue}
        step={null}
        min={firstMark}
        max={lastMark}
        valueLabelDisplay={disabled ? labelDisplay : 'auto'}

        marks={marks}
        className="dynamicrange"
        onChange={handleChange}
        disabled={disabled ? true : false}

        valueLabelFormat={(Value) =>
          showValueLabel ? (
            <>
              {`${Value ? Value : defaultValue}`}

            </>
          ) : Value
        }
      />
      {
        showValueLabel && <Typography id="non-linear-slider" className={`!text-[10px] !text-text_naturalgrey !pb-4`}>
          *Selected duration only offers the current mileage
        </Typography>
      }


    </Box>
  );
}


const DualRangeSlider = ({ priceRangeSelect, selectedFilter, optionSelect, buttonWidth, marks }) => {
  const [value, setValue] = React.useState([0, 30000]);

  const handlePriceSelect = () => {

    priceRangeSelect(value)



  };
  const handlePriceDeselectSelect = () => {
    if (value) {
      priceRangeSelect()
      setValue([0, 30000])

    }
  };
  const handleChange = (event, newValue) => {
    // console.log(newValue, "newvalllll")
    setValue(newValue);
  };
  function valuetext(value) {
    return `${value}°C`;
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}

        <span className="airbnb-bar h-2 w-[1px] bg-[#ed8b00] mx-[1px]" />
        <span className="airbnb-bar h-2 w-[1px] bg-[#ed8b00] mx-[1px]" />
      </SliderThumb>
    );
  }


  // console.log(optionSelect, 'optionselect', value);
  // console.log(selectedFilter);
  return (<>

    <Menu as="div" className={`relative inline-block text-left ${buttonWidth ? `w-[${buttonWidth}]` : ''}`}>
      <div className='rounded-[50px] shadow-md'>
        <Menu.Button className={`inline-flex w-full whitespace-nowrap rounded-[50px] justify-center gap-x-1.5  bg-white px-4 py-2 text-sm font-bold  shadow-sm ${selectedFilter ? 'border-[#ee4c13]  border-2 text-[#ee4c13] ' : 'text-text_headings'} hover:bg-gray-50 hover:text-[#ee4c13]`}>
          {optionSelect.PriceMax ? `${optionSelect.PriceMin} - ${optionSelect.PriceMax}` : 'Price'}
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
            <div className="px-4">
              <Slider
                slots={{ thumb: AirbnbThumbComponent }}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={30000}
                step={1000}

                className="dynamicrange"
              />


              <div className="flex justify-between">
                <p className="text-xs">Min Price: {optionSelect?.PriceMin ? optionSelect?.PriceMin / 1000 : value[0] / 1000}k</p>
                <p className="text-xs">Max Price: {optionSelect?.PriceMax ? optionSelect?.PriceMax / 1000 : value[1] / 1000}k</p>
              </div>


            </div>


          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-[50px] bg-[#ee4c13] px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#ef4c13] sm:ml-3 sm:w-auto"
              onClick={() => handlePriceSelect()}
            >
              Apply
            </button>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-[50px] bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={() => handlePriceDeselectSelect()}
            // ref={cancelButtonRef}
            >
              Clear
            </button>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

  </>

  )
}
RangeSlider.DualRangeSlider = DualRangeSlider
export default RangeSlider
