import { useState } from "react";

const Counter =() =>{
   // const state =useState();
    const[number,setNumber] =useState(0);

  return(
    <>
    <h1>{number}</h1>
    <button type='button' onClick={()=>setNumber(number+1)}></button>
    </>

  );
};

export default Counter;