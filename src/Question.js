import React from 'react'


export default function Question(props) {
  return (
    
       <div className="questionContainer">
           <label>Q{props.qnum} : {props.ques}</label>
          <br></br>
          <input type= "radio" name={props.qnum} value="a" onChange={(e) => props.onChange(props.qnum,e.target.value)}/>{props.opA}
            <br></br>
            <input type= "radio" name={props.qnum} value="b" onChange={(e) => props.onChange(props.qnum,e.target.value)}/>{props.opB}
            <br></br>
            <input type= "radio" name={props.qnum} value="c" onChange={(e) => props.onChange(props.qnum,e.target.value)}/>{props.opC}
           <br></br>
           <input type= "radio" name={props.qnum} value="d" onChange={(e) => props.onChange(props.qnum,e.target.value)}/>{props.opD}
           <br></br>
           <br></br>
          
       </div>
  
  )
}
