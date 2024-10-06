import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
// import "./styles.css";

export default function PriceRange( {priceRangeSelect,onInput}) {
  const [value, setValue] = useState([30, 60]);
  
  const [minValue, set_minValue] = useState();
  const [maxValue, set_maxValue] = useState();
  // const handleInput = (e) => {
  //   priceRangeSelect(e)
  //   console.log(e,"prsdfcsdfsdw");
  //   set_minValue(e.minValue);
  //   set_maxValue(e.maxValue);
  // };
  const handleInput = (e) => {
        
    setModalPrice(e)
    console.log(e);
   
};
// console.log(minValue,"min",maxValue,"max");

  return (
    <>

      <RangeSlider id="range-slider-yellow" min="1000"  max="4000" step="1000" tooltip="true" onInput={(e) => {
        onInput(e);
      }} />

    </>
  );
}
