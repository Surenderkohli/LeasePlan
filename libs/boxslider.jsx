import React from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BoxGrid from '../components/atoms/box';

function boxslider({ text, dealsData,cardWidth,cardPadding }) {

  // console.log(dealsData, "best deals data")

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", top: "100%", left: "52%", width: "40px", height: "40px", borderRadius: "50%", marginTop: "3%" }}
        onClick={onClick}
      />
    );
  }



  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", top: '100%', marginLeft: "43%", width: "40px", height: "40px", borderRadius: "50%", marginTop: "3%" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true

        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true

        }
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }

      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className=' mt-12 md:mt-0 ' >

        <div className='container  md:mt-0 mx-auto lg:px-5 xl:px-0 2xl:px-0 py-8'>
          <div>
            <h2 className='text-xl md:text-3xl font-bold text-gray-700 '>{text}</h2>
            <div className='flex flex-col gap-x-5'>
            {
              dealsData?.data?.totalBestDeals > 4 ? 
              <>
              <Slider {...settings}>
                    {
                       dealsData?.data?.carOffers?.map((item, key) => {
                        // {
                        //   console.log(item?.details?.image[0]?.imageUrl,'hhhhhh');
                        // }
                       return (
                       <>
                    
                     <BoxGrid.BoxGridCard_index
                        image={item?.details?.image[0]?.imageUrl}
                        carname={item?.carBrand_id?.companyName}
                        carmodel={item?.carSeries_id?.seriesName}
                        month={item?.offers[0]?.duration}
                        monthmileage={item?.offers[0]?.annualMileage}
                        cartype={item?.details?.transmission}
                        gas={item?.details?.fuelType}
                        fuel="Petrol"
                        mileage={item?.details?.tankCapacity}
                        hreflink={`/contact/${item._id}`}
                        className={'mx-auto mt-0 '}
                        cardWidth={cardWidth}
                        cardPadding={cardPadding}
                        price={`AED ${item?.offers[0]?.monthlyCost}`}
                       />
                   
      </>
    )
  })
}
             </Slider>
              </>
              :
              <>
             <div>
             {
                       dealsData?.data?.carOffers?.map((item, key) => {
                       return (
                       <>
                     
                     <BoxGrid.BoxGridCard_index
                        image={item?.details?.image[0]?.imageUrl}
                        carname={item?.carBrand_id?.companyName}
                        carmodel={item?.carSeries_id?.seriesName}
                        month={item?.offers[0]?.duration}
                        monthmileage={item?.offers[0]?.annualMileage}
                        cartype={item?.details?.transmission}
                        gas={item?.details?.fuelType}
                        fuel="Petrol"
                        mileage={item?.details?.tankCapacity}
                        hreflink={`/contact/${item._id}`}
                        className={'mx-auto mt-0 '}
                        price={`AED ${item?.offers[0]?.monthlyCost}`}
                       />
                   
      </>
    )
  })
}
             </div>
              </>
            }
</div>

            {/* {
              dealsData.data.carOffers.map((item, key) => {
                return (
                  <>
                  <div>
                    <div className='px-2'>
                      <BoxGrid
                         image={item.details?.image[0]?.imageUrl}
                         carname="Volkswagon Golf"
                         carmodel="2.0 TSI R-Line 5DR DSG"
                         month="6 month"
                         monthmileage="509 pcm(ex.VAT)"
                         cartype="manual"
                         gas="Co2"
                         fuel="Petrol"
                         mileage="99mile"
                         hreflink='/contact'

                        />
                </div>
              </div>
                  </>
                )
              })
             } */}

          </div>

          {/* <h2 className=' text-3xl font-medium'> Best business leasing deals for you</h2>
       <Slider {...settings}>
        <div>
            <BoxGrid
                image='/images/car_slider1.png'
                carname="Volkswagon Golf" 
                carmodel="2.0 TSI R-Line 5DR DSG" 
                month="6 month"
                monthmileage="509 pcm(ex.VAT)"
                cartype="manual"
                gas="Co2"
                fuel="Petrol"
                 mileage="99mile"
            />
        </div>

        <div className=''>
            <BoxGrid
                image='/images/slider2.png'
                carname=" Golf" 
                carmodel="2.0 TSI R-Line 5DR DSG" 
                month="6 month"
                monthmileage="509 pcm(ex.VAT)"
                cartype="manual"
                gas="Co2"
                fuel="Petrol"
                 mileage="99mile"
            />
        </div>

        <div className=''>
            <BoxGrid
                image='/images/slider3.png'
                carname="TATA" 
                carmodel="2.0 TSI R-Line 5DR DSG" 
                month="6 month"
                monthmileage="509 pcm(ex.VAT)"
                cartype="manual"
                gas="Co2"
                fuel="Petrol"
                 mileage="99mile"
            />
        </div>

        <div className=''>
            <BoxGrid
                image='/images/car_slider1.png'
                carname="NEXON" 
                carmodel="2.0 TSI R-Line 5DR DSG" 
                month="6 month"
                monthmileage="509 pcm(ex.VAT)"
                cartype="manual"
                gas="Co2"
                fuel="Petrol"
                 mileage="99mile"
            />
        </div>






       </Slider>  */}
        </div>

      </div>
    </>
  )

}


export default boxslider