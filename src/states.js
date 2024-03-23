//concept of states and hooks for  my learning only not a project part

import React, {useState} from 'react'

export default function States() {
const [x, setX] = useState(10)
function double(){
  setX(x*2)
}
  //without using hook and state
    // let x = 10;
    // function double(){
    //     alert('befor change' + x)
    //     x= x*2
    //     alert("after change " + x)
    // }

  return (
    <>
    <h1>value= {x}</h1>
    <button onClick={double}>Double</button>
    </>
  )
}
