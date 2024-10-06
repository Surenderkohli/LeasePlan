import React from 'react'

const Validation = (customerDetails,enquirymobileNumber,mobileNumberLength) => {
//     console.log(customerDetails?.emailAddress.pattern,"edfew");
// console.log(mobileNumberLength,"mobileNumberLength");
    let error = {}
    if (!customerDetails?.title) {
        error.title = "* This field is required"
    }
    if (!customerDetails?.firstName) {
        error.firstName = "* This field is required"
    }
    if (!customerDetails?.lastName) {
        error.lastName = "* This field is required"
    }
    if (!customerDetails?.emailAddress) {
        error.emailAddress = "* This field is required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(customerDetails?.emailAddress)){
        error.emailAddress = "* Invalid email address"
    }
    if (!enquirymobileNumber) {
        error.mobileNumber = "* This field is required"
    }
    else if(!(enquirymobileNumber.length >= 8 &&enquirymobileNumber.length<= 9)){
        error.mobileNumber = `Invalid phone number, must be ${'min-8 and max-9'} digits`
    }
    // if (!customerDetails?.questions) {
    //     error.questions = "* This field is required"
    // }

   
    
   
   


   

   
    return error
}

export default Validation
