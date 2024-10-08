import React from 'react'
import Slider from 'react-slick';
import Data from '../components/atoms/textarea';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

function homeslider({bannerList}) {
  // console.log(bannerList,"homesliderdata");
  // let bannerListData=data.bannerList;
  const dummydata=[
    {
      status:'active',
      imageUrl:`\\images\\slide2.jpg`,
      title:'Drive Your Dream Car',
      description:'Easy Rentals, Flexible Leases!'
      

    },
    {
      status:'active',
      imageUrl:`\\images\\slide4.png`,
      title:'Your Ride, Your Way ',
      description:'Rent or Lease with Ease!'
      

    },
    {
      status:'active',
      imageUrl:`\\images\\slide3.png`,
      title:'Quality Cars, Great Rates',
      description:'Rent or Lease Today!'
      },
    {
      status:'active',
      imageUrl:`\\images\\slide_03.jpg`,
      title:'Get on the Road Fast',
      description:'Rent or Lease with Us!'
      

    }
  ]
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
  };

  const slidesetting = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "ease-out",
  }

  return (
    <>

      <div className='relative  '>
        <Slider {...settings}>

          {dummydata?.map((item, i) => {
            console.log(item?.imageUrl,"status........")
            if(item?.status==="active"){
            return (<>
            <div key={i}>
              <img
                className='w-full max-w-full h-auto object-center'
                style={{ maxHeight: "80vh", objectFit: "cover" }}
                src={item?.imageUrl}
                // src='\images\slide4.png'
                alt={`Image ${i}`}
              />
            </div>

              <div className=" container w-1/2  top-0 py-16 text-red  px-4 md:px-0  " style={{ top: "30vh", left: "17%", position: "absolute" }} >
                <div className="z-10 " >
                <Data.WhiteData
                  heading={item?.title
                  }
                  text="Loreum Epsum sbh container next"
                  paragraph={item?.description
                  }
                  label="Find Out More"
                  variant="secondary"
                  position="initial"
                  align="left"
                  hreflink='/company'
                />
                </div>
              </div>
   
            </>)}
          })
          }

          
          {/* <div>
    <img className='w-full   object-center  ' style={{height:"90vh", objectFit:"cover"}}   src="/images/slide2.jpg"/>
    </div>
    <div>
    <img className='w-full  object-center  ' style={{height:"90vh", objectFit:"cover"}}  src="/images/slide3.png"/>
    </div>
    <div>
    <img className='w-full   object-center ' style={{height:"90vh", objectFit:"cover"}} src="/images/image5.png"/>
    </div>
    <div>
    <img className='w-full   object-center  ' style={{height:"90vh", objectFit:"cover"}}  src="/images/slide4.png"/>
    </div> */}

        </Slider>

        {/* <div className="container w-1/2  top-0 py-16 text-red  px-4 md:px-0  " style={{ top: "30vh", left: "17%", position: "absolute" }} >
          <div className="z-10 " > */}


            {/* <Slider className='' {...slidesetting} > */}
              {/* {
                data.map((item,i)=>{
                  return <div key={i}>
                  <Data.WhiteData
                    heading="This is demo first slide"
                    text="Loreum Epsum sbh container next"
                    paragraph="Loreum Epsum sbh container"
                    label="Find Out More"
                    variant="secondary"
                    position="initial"
                    align="left"
                    hreflink='/company'
                   />
                  </div>
                })
              } */}
              {/* <div>
                <Data.WhiteData
                  heading="This is demo first slide"
                  text="Loreum Epsum sbh container next"
                  paragraph="Loreum Epsum sbh container"
                  label="Find Out More"
                  variant="secondary"
                  position="initial"
                  align="left"
                  hreflink='/company'
                />
              </div> */}

              {/* <div>
                <Data.WhiteData
                  heading="New Upcoming demo Second slide"
                  text="Loreum Epsum sbh container next"
                  paragraph="Loreum Epsum sbh container"
                  label="Check it More"
                  variant="secondary"
                  position="initial"
                  align="left"
                  hreflink='/company'
                />
              </div> */}

              {/* <div>
                <Data.WhiteData
                  heading="Largest car lease Third slide"
                  text="Loreum Epsum sbh container next"
                  paragraph="Loreum Epsum sbh container"
                  label="More Upcoming"
                  variant="secondary"
                  position="initial"
                  align="left"
                  hreflink='/company'
                />
              </div> */}

              {/* <div>
                <Data.WhiteData
                  heading="Top Brands of Fourth slide"
                  text="Loreum Epsum sbh container next"
                  paragraph="Loreum Epsum sbh container"
                  label="Find Out More"
                  variant="secondary"
                  position="initial"
                  align="left"
                  hreflink='/company'
                />
              </div> */}

            {/* </Slider> */}

          {/* </div>
        </div> */}

        {/* <div className='px-4 md:px-0'>
        <div className=' md:w-2/6 w-4/6 z-10 -mt-96'>
            
        </div>
    </div> */}

      </div>

    </>
  )
}
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://api.leaseplan.dev.client.kloudlite.io/banner/get-banner`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default homeslider


// how to add product features points in excel sheet