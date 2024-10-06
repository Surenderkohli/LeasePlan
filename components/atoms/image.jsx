import React from 'react'
import Image from 'next/image'

const Imagecustom = ({src,alt,width,height,style}) => {
  return (
    <div>
      <Image
       src={src}
       alt={alt}
       width={width}
       height={height}
       style={style}
      />
    </div>
  )
}

export default Imagecustom
