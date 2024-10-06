import { list } from 'postcss'
import React from 'react'
import Button from './button'
import Title from './title'
import classNames from 'classnames'

 const List = ({data}) => {
    return(
      <ul>
        {
          data.map((data, i) => {

            return ( <div key={i}>
              
                <Title>
                  <h3 className="text-[#494646] font-Inter font-bold  text-base md:text-lg lg:text-xl pb-6">{data.title}</h3>
                </Title>
                {
                  data.list.map( (list, index) => {
                    return (
                      <Button.Link href={list.href} key={index}>
                        <li className="text-[#494646] font-normal  text-sm md:text-base pb-3">{list.item}</li>
                      </Button.Link>
                    )
                  })
                }
              
              </div>
           ) 
             
            
          })
        }
      </ul>
    )
    
  }

 const Listitem = ({data,classNames}) => {
  
   return (
     <ul>
       {
         data.map((data,i) => {
           return(
             <div className={`flex ${classNames?classNames:''}`} key={i}>
             <img src={data.svgimg}/>
               <div className='ml-3'>
               <Title>
                 <h3 className='text-text_darkgrey font-Inter font-normal text-base md:text-lg lg:text-xl '>{data.title}</h3>
                </Title>
                {
                  data.list.map((list,i) => {
                    
                    return(
                      <>
                      
                          <h4 className='text-sm md:text-base text-text_lightgrey'>{data.title}</h4>
                      
                      </>
                    )
                  })
                }
               </div>
             </div>
           )
         })
       }
     </ul>
   )
 }

 List.Listitem = Listitem




export default List