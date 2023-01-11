import React from 'react'
import './food.css'
import '../diff-cuisine/cuisine.css'


export default function Vec({imgSrc}) {
  return (
    <div className='vec-container df'>
        <img src={imgSrc} alt = "vec-img" />
    </div>
  )
}
