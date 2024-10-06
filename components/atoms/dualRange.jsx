
// import { useState } from "react";
// import MultiRangeSlider from "multi-range-slider-react";
// // import "./dualRange.css";

// export default function DualRange() {
//   const [minValue, setMinValue] = useState(25);
//   const [maxValue, setMaxValue] = useState(75);
//   const [minValue2, setMinValue2] = useState(0);
//   const [maxValue2, setMaxValue2] = useState(0);
//   return (
  
//       <div className="multi-range-slider-container">
//         <MultiRangeSlider
//           minValue={minValue}
//           maxValue={maxValue}
//           onInput={(e) => {
//             setMinValue(e.minValue);
//             setMaxValue(e.maxValue);
//           }}
//         ></MultiRangeSlider>
//         <hr />
//         <b>Range slider with custom css</b>
//         <hr />
//         <div>baseClassName='multi-range-slider-black'</div>
//         <div>minValue and maxValue dependent on state </div>
//         <br />
//         <br />
//         <MultiRangeSlider
//           baseClassName="multi-range-slider-black"
//           minValue={minValue}
//           maxValue={maxValue}
//           onInput={(e) => {
//             setMinValue(e.minValue);
//             setMaxValue(e.maxValue);
//           }}
//           onChange={(e) => {
//             setMinValue2(e.minValue);
//             setMaxValue2(e.maxValue);
//           }}
//         />
//         <div className="divOutput">
//           <div>onInput :</div>
//           <div>
//             <span>{minValue}</span>
//             <span>{maxValue}</span>
//           </div>
//         </div>
//         <div className="divOutput">
//           <div>onChange :</div>
//           <div>
//             <span>{minValue2}</span>
//             <span>{maxValue2}</span>
//           </div>
//         </div>
//       </div>
  
//   );
// }


// import React, { useState } from "react";
// import MultiRangeSlider from "multi-range-slider-react";
// import "./dualRange.css";
// function DualRange() {
// const [minValue, set_minValue] = useState(25);
// const [maxValue, set_maxValue] = useState(75);
// const handleInput = (e) => {
// 	set_minValue(e.minValue);
// 	set_maxValue(e.maxValue);
// };

// return (
//     <div className="sample">
// 		<MultiRangeSlider
// 			min={0}
// 			max={100}
// 			step={5}
// 			minValue={minValue}
// 			maxValue={maxValue}
// 			onInput={(e) => {
// 				handleInput(e);
// 			}}
// 		/>
// 	 </div>
// 	);
// }

// export default DualRange;
