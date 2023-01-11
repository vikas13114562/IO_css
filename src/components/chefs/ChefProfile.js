import React from 'react'
import './chefs.css'
import '../diff-cuisine/cuisine.css'

export default function ChefProfile(props) {

    const {imgSrc,fname,desc,style} = props.ele
    console.log(style);
    
  return (
    <div className='dfc profile-card' style={style} >
        <img className='round' src = {imgSrc} alt = "img" />
        <div className='bold'>{fname}</div>
        <p className='normal'>{desc}</p>
    </div>
  )
}
