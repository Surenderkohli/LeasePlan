import React, { useState, useEffect } from "react";
import Image from 'next/image'
import Imageslider from "../libs/imageslider";
import Boxslider from '../libs/boxslider';

import Slider from 'react-slick';


const Carallimage = ({carselectResponse}) => {


  const [currentImage, setCurrentImage] = useState();
  const [finalimages, setFinalImages] = useState();


  // console.log(carselectResponse?.carDetails?.image, "hjjjhjhjhjhjhjhj")

  // imageUrl

  var settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        
        }
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }

      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }

      }
    ]
  };

  const images = [
    { id: 1, src: "/images/skodafront.png" },
    { id: 2, src: "/images/skodaside.png" },
    { id: 3, src: "/images/skodafront.png" },
    { id: 4, src: "/images/skodaside.png" },
    { id: 5, src: "/images/skodafront.png" },
    { id: 6, src: "/images/skodaside.png" }
  ];

  useEffect(() => {
    setCurrentImage(carselectResponse?.carDetails?.image[0])
    setFinalImages(carselectResponse?.carDetails?.image)
  }, [])

  return (<>
    <div className="flex flex-col">
      {currentImage && (
        <div className="flex-1 transform-gpu">
          <Image className="max-h-[326px] lg:max-h-[475px] object-cover caral_large_img  p-1 rounded-xl"
            width={843} height={520} src={currentImage?.imageUrl} />
        </div>
      )}
      <div className="  caral_small_img">
        {/* {images.map(image => (
          <Image
            key={image.id}
            className="xl:w-36 h-32 object-contain  cursor-pointer"
            src={image.src}
            width={500}
            height={500}
            onClick={() => setCurrentImage(image)}
          />
        ))} */}
{
  finalimages?.length>=4?<Slider {...settings}>
  {finalimages&&(
    finalimages?.map(image => (
      <Image
        key={image?.id}
        className="w-36 h-[116px] sm:h-[130px] md:h-[110px] lg:h-[142px] object-cover p-1 rounded-xl cursor-pointer"
        src={image?.imageUrl}
        width={500}
        height={500}
        onClick={() => setCurrentImage(image)}
      />
    ))
  )}

</Slider>:<div className="flex justify-center">
  {
    finalimages?.map(image=>(
      <Image
        key={image?.id}
        className="w-[211px] h-24 md:h-32 object-cover p-1 rounded-xl cursor-pointer"
        src={image?.imageUrl}
        width={500}
        height={500}
        onClick={() => setCurrentImage(image)}
      />
      
    ))
  }
</div>
}

        


      </div>


    </div>

  </>
  );
};


export default Carallimage




