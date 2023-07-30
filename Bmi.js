import React, { useState } from 'react'
import './Bmi.css'
function Bmi() {
    
    
       const [result,setResult] = useState("");
       const [height,setHeight] = useState("");
       const [weight,setWeight] = useState("");
       
       const h = (e)=>
       {
         setHeight(e.target.value);
       }
       const w = (e)=>
       {
         setWeight(e.target.value);
       }
       const calculate = (e)=>
       {
          const hh = height/100
          const result = (((weight)/(hh * hh)).toFixed(2));
          setResult((result));           
       }
    
  return (
    <div className='bmi'>
      
        <h1>BMI CALCULATOR</h1>
        <form>
            <h3>Height</h3>
           <input type='number'onChange={h} placeholder='Height in cm' value={height}></input><hr></hr>
           <h3>Weight</h3>
           <input  type='number'onChange={w} placeholder='Weight in kg' value={weight}></input><hr></hr>
           <br></br><input className='cal' type='button' onClick={calculate} value='Calculate' /><br></br><br></br>
          
        </form>
        
            <h3 className='res'>BMI is <span>{result}</span> Kg/m<sup>2</sup>.</h3>
        </div>
    
  )
}

export default Bmi