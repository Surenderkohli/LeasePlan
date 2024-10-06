import axios from "axios";


const liveUrl = "https://api.leaseplan.amazing7studios.com"

const local = "http://localhost:5001";

// const local = "http://10.0.0.52:5001"
// console.log("local", process.env.BACKEND_URL)
export default axios.create({
   // baseURL: process.env.BACKEND_URL || local
   // baseURL:   liveUrl  ,
   baseURL:   local  ,

});