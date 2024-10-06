import React from 'react'
import { Mainbody, Mainlyout, SectionLayout, Mainheaderlayout } from '../../components/organism/Maincomponent/mainlyout'
// import Lottie from 'react-lottie';
// import Lottie from "lottie-react";
import Thankyou from '../../public/icons/thankyou.json'
import Boxslider from '../../libs/boxslider';
// import axios from 'axios';
import axios from '../../utils/backendAxios'
import { BsLinkedin, BsFileEarmarkArrowDownFill } from 'react-icons/bs'
import Image from 'next/image';
// import { LottiePlayer } from 'lottie-react';

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
  // console.log(props, 'props');
  // console.log(props?.bestDeals, "flg");
  let downloadId = props?.id.about
  // console.log(downloadId, 'dfcsdvdv');
  const formdownload = async () => {
    window.open(`https://api.leaseplan.amazing7studios.com/enquiry-form/${props?.id?.about}/download`);
    // try {
    //     await HostedApi({
    //         // url: `/school/${viewSchoolId}`,
    //         url: `/64674a7712e3ae558ea3fd1f/download`,

    //         method: "GET",
    //     }).then((res) => {
    //       console.log(res.data);
    //       console.log('downlaodId',res.downloadId)
    //         // setSingleSchool(res?.data?.data)
    //     });
    // } catch (e) {
    //     console.error(e);
    // }
  };

  return (
    <>
      <Mainheaderlayout>
        <Mainbody>
          <SectionLayout className={'lg:pt-36 md:pt-24 pt-24 px-0'}>

            {/* <Lottie
              options={defaultOptions}
              height={190}

              style={{ maxWidth: "100px" }}
            /> */}

            {/* <Lottie animationData={Thankyou} style={{ maxWidth: "100px", margin: 'auto' }} /> */}
            <div className='block pb-6'>
              <Image src={'/images/thankyou.svg'} width={300} height={200}  className='mx-auto'/>
            </div>

            <div className='text-center'>
              <h1 className='text-zinc-600 font-bold text-3xl pb-6 '>
                Thank you
              </h1>
              <div className="flex items-center justify-center">
                <p className='text-base  mr-1 underline text-orange-500 font-bold pb-3'>Download your form </p><BsFileEarmarkArrowDownFill className='cursor-pointer' onClick={() => formdownload()} />
              </div>
              <h3 className='text-zinc-500 font-normal text-xl lg:text-2xl '>
                Thank you for enquiry. One of our team will be in touch shortly
              </h3>

              <h3 className='text-zinc-500 font-normal text-xl lg:text-2xl    mt-3'>
                Just to re-confirm.The pricing started on this vehicle is subject to change until you speak to a member of our team and get an official offer.
              </h3>
            </div>

            <div className=' mb-16 about_slider'>
              <Boxslider dealsData={props?.bestDeals} text='Other deals that you can look for'  cardPadding={'px-4'}/>
            </div>

          </SectionLayout>


          <hr className='mt-8' size="8" width="100%" color="orange"></hr>
        </Mainbody>
      </Mainheaderlayout>



    </>
  )
}


export async function getServerSideProps(context) {
  let id = context.params;
  id = JSON.parse(JSON.stringify(id))

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


      bestDeals: bestDeals?.data,
      id: id

    }
  }
}
export default About




