import React, { use, useState } from 'react'
import W2 from './W2'
import Pick from './Pick'

const Index = () => {
const[a,b]=useState("")
function ab(){
  b("yellow")
}
  return (
    <>
        <header>
        <h2>logo</h2>
        <ul>
          <li>contact</li>
          <li>view</li>
          <li>source</li>
          <li>run</li>
        </ul>
      </header>
  <button onClick={ab}>click me</button>
  <div  style={{height:`60vh`,width:`94%`,backgroundColor:a}} className='box'>
    <Pick/>
  </div>
  <div className="large">
    <img src="img4.webp" alt="" />
  </div>
  <h1 id='h1'>"All Types of Welding Work", <br />
"Steel & Iron Gates, Grills, Staircases", <br />
"Fabrication • Repair • Installation"</h1>
    <W2
     img="img5.jpeg"
     im="img6.jpg"
     im3="img7.jpg"
     
     />
<div className="m">
<div className="map">
<img src="img8.jpg" alt="" />

</div>
<div className="t">
  <img src="img9.avif" alt="" />
</div>
</div>
<h4>"Steel se Style tak – Har Joint Perfect!"Precision Welding for Stronger Connections"Welding Done Right – Durable. Reliable. Affordable.""KEA ka Trusted Welding Expert – Har Metal Ka Hal!"

</h4>

    
    </>
  )
}

export default Index