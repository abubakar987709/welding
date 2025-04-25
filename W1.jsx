import React, { use, useEffect, useRef, useState } from 'react'

const W1 = () => {
const[inputvalue,setinputvalue]=useState("")
const previousInputValue=useRef("")
const count=useRef(0)
const inputelement=useRef("")

function inputfocus(){
    inputelement.current.focus()
}
useEffect(()=>{
    count.current=count.current+1;
    previousInputValue.current=inputvalue
})
  return (
    <>
    <input type="text" ref={inputelement}
    value={inputvalue}
    // onChange={(a)=>setinputvalue(a.target.value)}
    onChange={(e)=>setinputvalue(e.target.value)}
    
    />
    <button onClick={inputfocus}>click me</button>
    <h1>Comments:{count.current}</h1>
    <h1>Currentvalue:{inputvalue}</h1>
    <h1>Previousvalue:{previousInputValue.current}</h1>
    
    </>
  )
}

export default W1