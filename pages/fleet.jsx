import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import Link from 'next/link'
// import axios from 'axios';
import axios from '../utils/backendAxios'
import { ErrorMessage } from '@hookform/error-message';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router, { useRouter } from 'next/router';
import Validation from './api/validation';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import CarLoader from '../components/atoms/carloader';
import startsWith from 'lodash.startswith';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));




const Fleet = (props) => {
  // console.log(enquiryData,'drrsdrfdf');
  // console.log(props?.enquiryData,'error data .....');

  // const { register, handleSubmit, formState: { errors } } = useForm();
  const [argreement, setArgreement] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [error, setError] = useState({})
  const [querryData, setQuerryData] = useState()
  const [loader, setLoader] = useState(false)
  const [enquirymobileNumber, setEnquiryMobileNumber] = useState()
  const [mobileNumberLength, setMobileNumberLength] = useState()
  const [customerDetails, setCustomerDetails] = useState({
    title: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    mobileNumber: '',
    questions: '',
    carOffers_id: ''

  })

  // console.log(car_id, "destructure");

  const router = useRouter()

  // const onSubmit = data => console.log(data);
  // console.log(errors);
  const handleCustomerDetails2 = (value, country, e, formattedValue) => {
    // console.log(value,"value.");
    // console.log(country,"country");
    // console.log(country?.format?.match(/\./g).length,"dot count", country.dialCode.length,"dial code length");
    // console.log((country?.format?.match(/\./g).length)-(country.dialCode.length),"number length");
    //  setMobileNumberLength((country?.format?.match(/\./g).length)-(country.dialCode.length))
    setMobileNumberLength('12')

    // console.log(e,"e");
    // console.log(formattedValue,"formattedValue");
    //  console.log(value.slice(country.dialCode.length),'3er2fewfwefrwferfe');
    setEnquiryMobileNumber(value.slice(country?.dialCode?.length))
    setCustomerDetails({ ...customerDetails, mobileNumber: formattedValue })
  }
  const handleChange = (event) => {
    setArgreement(event.target.checked)
  }
  const handleCustomerDetails = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(event);
    // (name == 'mobileNumber') ? setCustomerDetails({ ...customerDetails, [name]: value.replace(/[ ]+/g, "") }) :
    setCustomerDetails({ ...customerDetails, [name]: value })


    // console.log(e.target.value)

  }
  useEffect(() => {
    if (props?.enquiryData) {
      setQuerryData(props?.enquiryData)
      setCustomerDetails({ ...customerDetails, carOffers_id: props?.enquiryData[0] })
    }



  }, [])
  useEffect(() => {
    if (Object.keys(error).length === 0 && isDisabled) {
      handleSubmit()


      // console.log('call whem  valid')

    }
    if (Object.keys(error).length !== 0) {
      setIsDisabled(false)
      toast.error('Please complete all required fields.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }




  }, [error])
  const validateInput = async (e) => {
    e.preventDefault();
    setError(Validation(customerDetails, enquirymobileNumber, mobileNumberLength))
    setIsDisabled(true)
  }


  const handleSubmit = async () => {

    setIsDisabled(true)
    setLoader(true)

    try {


      // const res = await axios.post(`http://10.0.0.210:5001/enquiry-form/add-enquireForm?duration=${contractLength}&annualMileage=${annualMileage}&monthlyCost=${monthlyCost}`, customerDetails)

      const res = await axios.post(`/enquiry-form/add-enquireForm?duration=${querryData[1]}&annualMileage=${querryData[2]}&monthlyCost=${querryData[3]}`, customerDetails)
      // "http://10.0.0.39:5001/",
      // console.log(res, "resppppp")
      if (res.status === 200) {
        toast.success('Submitted successfully', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // console.log(res?.data?.enquiryId,"id......");
        // setLoader(false)
        setTimeout(() => {
          router.push(`/about/${res?.data?.enquiryId}`)


        }, 1000)


        //  formdownload()


      }
      // if (res?.status === 400) {
      //   toast.error('Fill atleast one parent details', {
      //     position: "top-right",
      //     autoClose: 2000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //   })
      //   setIsDisabled(false)
      // }




    } catch (e) {

      // console.log(e.response.data.message,"error")

      // setLoader(false)
      toast.error('Try again', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsDisabled(false)


    }
    finally {
      setLoader(false); // Set loading state to false whether the API call succeeds or fails
      // setIsDisabled(false);
    }


  }

  // const NotFound = () => {

  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: carrunning,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice"
  //     }
  //   };
  //   return <>

  //     <CarLoader>
  //         <div className='block '>
  //           <Lottie
  //             options={defaultOptions}
  //             style={{ maxWidth: "280px" }}
  //           />

  //           <p className='text-center text-2xl text-orange-500'>Sorry! Car Not found in Inventry.</p>


  //         </div>

  //         </CarLoader>

  //   </>
  // }


  // console.log(querryData, "enquerry data");
  // console.log(customerDetails, "customerdetails");

  return (<><div className='block bg-[#FFFFFF] rounded-lg shadow-lg  p-8 py-10 relative' >


    <div className={`${loader ? 'opacity-50' : ''}`}>

      <div className=''>
        <label className='text-sm font-semibold my-1 text-[#2d2d2d]'>Title</label>
        <div className='flex my-1 w-[11.7rem] sm:w-[50%] md:w-56 text-sm h-auto border border-[#989a9a] divide-x divide-[#989a9a] rounded-lg'>
          {
            customerDetails?.title == "mr" ? <label className=" w-16 h-[40px] rounded-l-[0.43rem] hover:bg-[#EA7B00] hover:text-white bg-[#f06400] text-white  flex justify-center cursor-pointer items-center">
              <button
                type="radio"
                name="title"
                value="mr"
                // onClick={handleCheckboxChange}
                // onChange={handleOptionChange}
                onClick={handleCustomerDetails}
                className="mr-2"
              />
              Mr.
            </label> : <label className=" w-16 h-[40px] rounded-l-[0.43rem] hover:bg-[#fdf3e5]  bg-[#fff]  flex justify-center cursor-pointer items-center">
              <button
                type="radio"
                name="title"
                value="mr"
                // onClick={handleCheckboxChange}
                // onChange={handleOptionChange}
                onClick={handleCustomerDetails}
                className="mr-2"
              />
              Mr.
            </label>
          }
          {
            customerDetails?.title == "mrs" ? <label className=" w-16 h-[40px]  text-white hover:bg-[#EA7B00] bg-[#f06400] hover:text-white  flex justify-center cursor-pointer items-center">
              <button
                type="radio"
                name="title"
                value="mrs"
                // onClick={handleCheckboxChange}
                // onChange={handleOptionChange}
                onClick={handleCustomerDetails}
                className="mr-2"
              />
              Mrs.
            </label> : <label className=" w-16 h-[40px]  hover:bg-[#fdf3e5]  bg-[#fff] flex justify-center cursor-pointer items-center">
              <button
                type="radio"
                name="title"
                value="mrs"
                // onClick={handleCheckboxChange}
                // onChange={handleOptionChange}
                onClick={handleCustomerDetails}
                className="mr-2"
              />
              Mrs.
            </label>

          }
          {
            customerDetails?.title == "miss" ? <label className=" w-16 h-[40px] hover:bg-[#EA7B00] bg-[#f06400] text-white  hover:text-white  flex justify-center cursor-pointer items-center">
              <button
                type="radio"
                name="title"
                value="miss"
                // onClick={handleCheckboxChange}
                // onChange={handleOptionChange}
                onClick={handleCustomerDetails}
                className="mr-2"
              />
              Miss
            </label> : <label className=" w-16 h-[40px]  hover:bg-[#fdf3e5]  bg-[#fff]   flex justify-center cursor-pointer items-center">
              <button
                type="radio"
                name="title"
                value="miss"
                // onClick={handleCheckboxChange}
                // onChange={handleOptionChange}
                onClick={handleCustomerDetails}
                className="mr-2"
              />
              Miss
            </label>
          }
          {
            customerDetails?.title == "ms" ? <label className=" w-16 h-[40px] rounded-r-[0.43rem] text-white hover:bg-[#EA7B00] bg-[#f06400] hover:text-white  flex justify-center cursor-pointer items-center">
              <button
                type="radio"
                name="title"
                value="ms"
                // onClick={handleCheckboxChange}
                // onChange={handleOptionChange}
                onClick={handleCustomerDetails}
                className="mr-2"
              />
              Ms.
            </label> : <label className=" w-16 h-[40px] rounded-r-[0.43rem] hover:bg-[#fdf3e5]  bg-[#fff]   flex justify-center cursor-pointer items-center">
              <button
                type="radio"
                name="title"
                value="ms"
                // onClick={handleCheckboxChange}
                // onChange={handleOptionChange}
                onClick={handleCustomerDetails}
                className="mr-2"
              />
              Ms.
            </label>
          }




        </div>
        <p class="text-red-500 text-xs italic mb-4 md:mb-0">{error.title}</p>
      </div>

      <div className='mt-4'>
        <label className=' text-sm font-semibold text-[#2d2d2d] my-1' >First Name</label>
        <div>
          <input className=' block w-full p-2 my-2 h-[40px]   sm:text-sm border border-[#989a9a] rounded-lg bg-[#fff]   cursor-pointer  focus:outline-none' type="text" name='firstName' id='firstName' onChange={handleCustomerDetails} />
        </div>


        <p class="text-red-500 text-xs italic mb-4 md:mb-0">{error.firstName}</p>
      </div>

      <div className='mt-4'>
        <label className='text-sm font-semibold text-[#2d2d2d] my-1'>Last Name</label>
        <div>
          <input className='w-full p-2 h-[40px] my-2  sm:text-sm border border-[#989a9a] rounded-lg bg-[#fff] flex justify-center cursor-pointer items-center focus:outline-none' type="text" name="lastName" onChange={handleCustomerDetails} />
        </div>
        <p class="text-red-500 text-xs italic mb-4 md:mb-0">{error.lastName}</p>
      </div>

      <div className='mt-4'>
        <label className='text-sm font-semibold text-[#2d2d2d] my-1'>Email</label>
        <div>
          <input className='w-full p-2 sm:text-sm font-normal h-[40px] border border-[#989a9a] rounded-lg my-2 bg-[#fff]  flex justify-center cursor-pointer items-center focus:outline-none' type="email" name="emailAddress" onChange={handleCustomerDetails} />
        </div>
        <p class="text-red-500 text-xs italic mb-4 md:mb-0">{error.emailAddress}</p>
      </div>

      <div className='mt-4'>
        <label className='text-sm font-semibold text-[#2d2d2d] my-1'>Mobile number</label>
        <div>
          {/* <input className='w-full p-2 h-[46px] my-2 border border-orange-300 rounded-lg bg-orange-100  flex justify-center cursor-pointer items-center' type="tel" placeholder="Mobile number"  maxLength='10' name='mobileNumber' onChange={handleCustomerDetails} />
       */}
          <PhoneInput
            country={'ae'}
            // value={this.state.phone}
            masks={{ ae: "........." }}
            name='mobileNumber'
            countryCodeEditable={false}
            onlyCountries={['ae']}
            disableDropdown
            inputClass='sm:!text-sm !text-[16px]'
            value={customerDetails?.mobileNumber}
            containerClass="my-2 "
            onChange={handleCustomerDetails2}

            // containerClass="w-full p-2 h-[46px] my-2 border border-orange-300 rounded-lg bg-orange-100  flex justify-center cursor-pointer items-center"
            inputStyle={{ background: '#fff', width: '100%', border: '1px solid #989a9a', height: '40px', borderRadius: '0.5rem' }}
            // dropdownStyle={{background:'#ffedd5'}}
            buttonStyle={{ background: '#fff', border: '1px solid #989a9a', height: '40px', borderBottomLeftRadius: '0.5rem', borderTopLeftRadius: '0.5rem', hover: { background: 'red' } }}

          // isValid={(inputNumber, country, countries) => {


          //   let result=countries.some((country) => {
          //     return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);

          //   });

          // }}


          />
        </div>
        <p class="text-red-500 text-xs italic mb-4 md:mb-0">{error.mobileNumber}</p>

      </div>


      <div className='mt-4'>
        <label className='text-sm font-semibold text-[#2d2d2d] my-1'>Questions</label>
        <div>
          <textarea className='w-full p-2 h-32 my-2 border border-[#989a9a] sm:text-sm focus:outline-none  rounded-lg  flex justify-center cursor-pointer items-center' type="text" placeholder='Write your questions' name='questions' onChange={handleCustomerDetails} />
        </div>

      </div>

      <div className="flex justify-around items-start mt-6 relative">
        <div className='inline'>
          <input checked disabled id="checked-checkbox" type="checkbox" value="" className="absolute top-1 left-1 lg:w-4 lg:h-4 w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        </div>
        <div>
          <label for="agreement" class='text-xs pl:[25px]  xl:text-sm w-11/12 font-medium pl-7 text-gray-400 inline-block '>
            LeasePlan is committed to protecting the privacy of personal information collected and processed by us. If you would like to know about our privacy practices in more detail, please read our <span className='text-orange-500'>privacy statement.</span>
          </label>
        </div>
      </div>



      <div class='private_lease_checkbox flex justify-around items-center mt-4 relative'>
        <div className='inline'>
          <input type="checkbox" class='input_chooseDeal  absolute top-[2px] left-1  lg:w-4 w-3 lg:h-4 h-3  xl:bottom-1 lg:bottom-3 md:bottom-5 bottom-3' name="agreement" id="specialOffersCheckbox" />
        </div>
        <div>
          <label for="agreement" class='text-xs xl:text-sm w-11/12 pl-7 inline-block'>
            Yes, you may send me messages about special offers, deals, and customer surveys. I can always unsubscribe from the messages.
          </label>
        </div>
      </div>



      {/* <button type="submit" classname=" " disabled={!argreement}>
        Enquiry Now
      </button> */}

      <div className='flex mt-6 justify-center items-center'>
        <button type="submit" className={`${isDisabled ? " w-52  p-2.5 bg-orange-200 text-white text-center text-[16px] font-semibold   rounded-[50px] " : " w-52  p-2.5 bg-[#f06400] hover:bg-[#ee4c13] text-[#fff] text-center text-[16px] font-semibold   rounded-[50px] "}`} onClick={validateInput} disabled={isDisabled}>
          Enquiry Now
        </button>

      </div>



    </div>

    {loader && <div className='absolute w-full h-full flex justify-center items-center top-0 left-0'>
      <Box sx={{ position: 'relative' }}>
        <CircularProgress
          variant="determinate"
          sx={{
            color: (theme) =>
              theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
          }}
          size={40}
          thickness={4}
          {...props}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: (theme) => (theme.palette.mode === 'light' ? '#f06400' : '#f06400'),
            animationDuration: '550ms',
            position: 'absolute',
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round',
            },
          }}
          size={40}
          thickness={4}
          {...props}
        />
      </Box>


    </div>}


  </div>

    <ToastContainer />
  </>

  );
}
export default Fleet





