import React from 'react'
import Header from '../header'
import Footer from '../footer'
import classNames from 'classnames'
export const Mainlyout = ({children}) =>{
  return (
   <>
     <Header/>
       <div className=' h-max m-auto w-full pb-8 lg:pb-20 pt-[64px] bg-[#f6f8fb]'>
            {children}
       </div>
      
     <Footer/>

   </>
  )
}

// export const Mainlotheryout = ({children}) =>{
//     return (
//      <>
//         {/* <Header.Whiteheader/> */}
//          <div className='w-max bg-pattern-bg bg-cover h-max w-[100%]'>
//               {children}
//          </div>   
//        {/* <Footer/> */}
  
//      </>
//     )
//   }


export const  Mainheaderlayout = ({children,showHeader,navHide}) =>{
    return (
     <>
       <Header.Whiteheader showHeader={showHeader} navHide={navHide}/>
         <div className='bg-[#f6f8fb] bg-cover  w-full m-auto pb-8 lg:pb-20 h-max'>
              {children}
         </div>
        
       <Footer/>
  
     </>
    )
  }



export const Mainbody = ({children}) => {
    return (
        <>
        <div className="container  mx-auto">
				{children}
		</div>
        </>
    )
}


export const SectionLayout = ({children,className}) => {
	return (
		<>
			<div className={classNames("w-full px-5 pt-10  md:pt-20 xl:pt-36 2xl:pt-36 ",className)}>
				{children}
			</div>
		</>
	)
}


