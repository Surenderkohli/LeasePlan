import React, {useState} from 'react'
import Tabcontent from './tabcontent';
import Accordion from './Accordion';


const Tabs  = ({title, nexttitle, index,activeTab,handleTabClick }) => {

    return (
        <>
    <div className="w-[100%] shadow-slate-900     block">
      <ul className="flex border-orange-300 border-b-0  shadow-slate-500 font-semibold flex-row md:justify-start md:border-b md:border-red-200">
        <Tab title={title}  index={index} activeTab={activeTab} handleTabClick={handleTabClick} />
        <Tab nexttitle={nexttitle} index={1} activeTab={activeTab} handleTabClick={handleTabClick} />
      </ul>

      
     <div className="p-8 text-text_lightgrey border-inherit shadow-lg shadow-grey-100 border-[1px] bg-white ">
        {activeTab === 0 && 
            <p>
            Choose the vehicle you want, the duration of the contract you are ready to sign and give us 
            your estimated annual mileage
            Based on your selections, we share a monthly lease rate offer with you
            Once you accept the offer, we ask you to send Certain Documents to us
             Once we successfully process your documentation, we share a lease contract with you
              You sign the lease contract, we set up a direct debit and process your security deposit
                Congratulations! Your vehicle is delivered and you can start driving
            </p>
         }
        {activeTab === 1 && <p>
            we ask you to send Certain Documents to us
             Once we successfully process your documentation, we share a lease contract with you
              You sign the lease contract, we set up a direct debit and process your security deposit
           Congratulations! Your vehicle is delivered and you can start drivingChoose the vehicle you want,
            the duration of the contract you are ready to sign and give us 
            your estimated annual mileage
            Based on your selections, we share a monthly lease rate offer with you
            Once you accept the offer, 
        </p>}
    
      </div>

     
     
    </div>

  
  
        </>
    )
}

const Tabsaccordian = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="lg:mt-20 mt-8 rounded-b-xl">
      <div className="flex border-b-2 text-center border-orange-500">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`p-4 w-full text-base md:text-lg font-semibold cursor-pointer ${
              activeTab === index ? "text-white bg-[#02485C]" : "text-black  bg-[#F3F3F3]"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab?.title}
          </div>
        ))}
      </div>
      <div className="border border-slate-100 shadow-lg rounded-b-xl  p-4 bg-white">
        {tabs.map((tab, index) => (
          <div key={index} className={activeTab === index ? "" : "hidden"}>
            {tab?.content?.map((accordion, index) => (
              <Accordion key={index} title={accordion?.title}>
               
                {accordion?.content}
              </Accordion>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};


Tabs.Tabsaccordian = Tabsaccordian

const Tab  = ({title, nexttitle, index, activeTab, handleTabClick}) => {
  // console.log(index);
        return (
            <>
               <li className={`mt-1  md:mt-0  w-[100%] text-center bg-[#F3F3F3] font-bold text-lg  cursor-pointer ${index === 0 ? 'rounded-tl-lg ' : ' rounded-tr-lg '}`}
                  onClick={() => handleTabClick(index)} >
                       <h3 className={`${activeTab === index ? `${activeTab === 0?'rounded-tl-lg':'rounded-tr-lg'} text-white bg-primary_orange_400 p-4 text-base md:text-lg lg:text-xl border-transparent` : 'text-text_darkgrey p-4 text-base md:text-lg lg:text-xl border-b-2  border-primary_orange_400'}`}>{title || nexttitle}</h3>
              </li>
            </>
        )
}



export default Tabs