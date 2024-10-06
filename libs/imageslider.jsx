import React from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BoxGrid from '../components/atoms/box';

function imageslider({ text }) {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", top: "100%", left: "50%", width: "32px", height: "32px", borderRadius: "50%", padding: "2px", marginTop: "3%" }}
        onClick={onClick}
      />
    );
  }


  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", top: '100%', marginLeft: "40%", width: "32px", height: "32px", borderRadius: "50%", padding: "2px", marginTop: "3%" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className=' bg-pattern-bg bg-contain' >

        <div className='container mt-6 md:mt-0 mx-auto lg:px-5 xl:px-5 2xl:px-8 py-8 "'>
          <div>
            <h2 className='text-xl md:text-3xl font-bold text-gray-700'>{text}</h2>
            <Slider {...settings}>
            <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
            </Slider>
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


export default imageslider