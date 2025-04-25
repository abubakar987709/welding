import React, { use, useContext } from 'react'
import"./website.css"
import { useState } from 'react'

const W2 = (props) => {


  return (
    <>
    <div className="main2">
        <div className="pic">
        <img src={props.img} alt="" />
        <h2 id='h2'>book now</h2>

        </div>
        <div className="pic">
        <img src={props.im} alt="" />
        <h2 id='h2'>book now</h2>

        </div>
        <div className="pic">
        <img src={props.im3} alt="" />
        <h2 id='h2'>book now</h2>
        </div>
        </div>

    
    </>
  )
}

export default W2