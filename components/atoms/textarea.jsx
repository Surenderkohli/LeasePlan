import Button from "./button"
import Link from 'next/link';

const Data = ({heading,text,paragraph}) => {
   return(
       <>
        <div>
            {heading && <h2>{heading}</h2>}
            {text && <h1>{text}</h1>}
            {paragraph && <p>{paragraph}</p>}
        </div>
       </>
   )
}

const WhiteData = ({heading,  maintext, paragraph, label, variant,hreflink, align,position}) => {
      return(
          <>
      <div className={`flex flex-col ${position} lg:gap-12 md:gap-8 gap-6`}>
        <div className={`flex flex-col lg:gap-4 gap-2  ${align}`}>
          {heading && <h2 className="text-white lg:text-5xl md:text-2xl text-xl font-bold uppercase ">{heading}</h2>}
          {maintext && <h1 className="text-white lg:text-4xl text-3xl font-bold">{maintext}</h1>}
          {paragraph && <p className={`text-white lg:text-2xl font-medium md:text-base sm:text-sm  text-xs`}>{paragraph}</p>}

        </div>

          <Link href={hreflink}>
            <Button label={label} variant={variant}/>
          </Link>
       
      </div>
          </>
      )
}

Data.WhiteData = WhiteData;


const WhiteDataButton = ({heading, text,paragraph, label, variant, align, position}) => {
    return (
        <>
            {heading && <h2>{heading}</h2>}
            {text && <h1>{text}</h1>}
            {paragraph && <p>{paragraph}</p>}
        </>
    )
}

Data.WhiteDataButton = WhiteDataButton;






export default Data;