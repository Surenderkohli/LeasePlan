import { useState } from 'react';
import { motion } from 'framer-motion';

 const CustomSelect = ({ options, value, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className="relative min-w-[150px]">
      <div
        className="flex items-center  bg-[#fff] py-2 border-2 border-primary_orange_400 hover:border-primary_orange_300 hover:bg-primary_orange_50 px-4 w-full   border-solid mr-4 lg:mt-0 text-primary_orange_400  rounded-[50px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-sm  font-bold text-center w-full">
          {value ? options.find((option) => option.value === value)?.label : label}
        </div>
        <div className="m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-4 h-4 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          >
             <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="absolute top-full bg-white  text-primary_orange_400 shadow-xl w-fit p-4 px-4 rounded-lg border border-solid mt-2.5 z-10 w-full"
        >
          <ul className="space-y-2">
            {options.map((option) => (
              <li
                key={option.value || option._id}
                className="cursor-pointer p-2 rounded  hover:text-primary_orange_400 group hover:bg-[#fdf3e5]"
                onClick={() => handleSelect(option.value)}
              >
                {option.label || option.companyName}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

 const CustomSelectmake = ({ options, value, onChange, label }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleSelect = (selectedValue) => {
        // console.log(selectedValue, "this is selected")
    //   onChange(selectedValue);
      setIsOpen(false);
    };
  
    return (
      <div className="relative min-w-[150px]">
        <div
          className="flex bg-white p-2.5 w-full h-12  border-solid mr-4 mt-2 lg:mt-0 text-orange-600 border-2 border-orange-400 rounded-lg cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="text-sm md:text-base font-semibold px-2.5 w-full">
            {value ? options.find((option) => option.value === value)?.label : label}
          </div>
          <div className="m-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-4 h-4 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            >
               <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
  
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="absolute top-full bg-white text-orange-600 shadow-xl w-fit p-4 px-8 rounded-lg border border-solid mt-2.5 z-10"
          >
            <ul className="space-y-2">
              {options.map((option) => (
                {/* <li
                  key={option._id}
                  className="cursor-pointer p-2 rounded  hover:text-white group hover:bg-orange-500"
                  onClick={() => handleSelect(option._id)}
                >
                  {option.companyName}
               
                </li> */}

              ))}
            </ul>
          </motion.div>
        )}
      </div>
    );
  };


  CustomSelect.CustomSelectmake = CustomSelectmake
  export default CustomSelect