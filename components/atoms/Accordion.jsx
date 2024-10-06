import React, {useState} from 'react';
import Plus from '../../public/icons/plus.svg'


const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="  border-b mb-4 border-gray-300 rounded-md">
        <div
          className="flex justify-between p-4 cursor-pointer items-center"
          onClick={toggleAccordion}
        >
          <h2 className="text-sm md:text-base lg:text-lg font-medium">{title}</h2>
          <span className='accordial_plus'>{isOpen ? <img src="../../images/minus.png"/> : <img src="../../images/plus.png"/>}</span>
        </div>
        {/* {isOpen && (<ul>children.map((children)=>( <li className="p-4" key={index}>{children}</li>))</ul>)} */}
        {isOpen && (<ul className=" marker:text-orange-500">
      {children?.map((children, index) => (
        <li className="md:p-4 py-2 px-4 border-b flex items-start" key={index}>
          <svg className="w-4 h-5 mr-1.5 text-orange-500 dark:text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
       
          {children}</li>
      ))}
    </ul>)}

      </div>
    );
  }


export default Accordion
