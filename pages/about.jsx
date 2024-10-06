import React from 'react'
import { Mainbody, Mainlyout, SectionLayout, Mainheaderlayout } from '../components/organism/Maincomponent/mainlyout'
// import Lottie from 'react-lottie';
// import Lottie from "lottie-react";
import Thankyou from '../public/icons/thankyou.json'
import Boxslider from '../libs/boxslider';
// import axios from 'axios';
import axios from "../utils/backendAxios"
import Image from 'next/image';

function About(props) {

  // console.log(props.bestDeals, "this is about us page")

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Thankyou,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  // console.log(props?.bestDeals, "flg");

  return (
    <>
      <Mainheaderlayout>
        <Mainbody>
          <SectionLayout>

            {/* <Lottie 
             options={defaultOptions}
             height={190}
            
             style={{maxWidth:"100px"}}
          />   */}
            {/* <Lottie animationData={Thankyou}  style={{ maxWidth: "100px", margin:'auto' }}/> */}
            <div className='block'>
              <Image src={'/images/thankyou.svg'} width={300} height={200}  className='mx-auto'/>
            </div>
            
            <div className='text-center'>
              <h1 className='text-zinc-600 font-bold text-3xl '>
                Thank you
              </h1>
              <h3 className='text-zinc-500 font-normal text-2xl mt-2'>
                Thank you for enquiry. One of our team will be in touch shortly
              </h3>

              <h3 className='text-zinc-500 font-normal text-2xl mt-6'>
                Just to re-confirm.The pricing started on this vehicle is subject to change until you speak to a member of our team and get an official offer.
              </h3>
            </div>

            <div className='mt-16 mb-16 about_slider'>
              <Boxslider dealsData={props?.bestDeals} text='Other deals that you can look for' />
            </div>

          </SectionLayout>


          <hr className='mt-8' size="8" width="100%" color="orange"></hr>
        </Mainbody>
      </Mainheaderlayout>



    </>
  )
}


export async function getServerSideProps() {

  let bestDeals;

  // Fetch data from external API
  try {

    bestDeals = await axios.get('/carOffer/best-deal')
  } catch (e) {
    console.log(e);
  }

  // Pass data to the page via props
  return {
    props: {


      bestDeals: bestDeals?.data

    }
  }
}
export default About




