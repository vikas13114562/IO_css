import React from 'react'
import './food.css'
import '../diff-cuisine/cuisine.css'
import Vec from './Vec'

export default function FoodItem(props) {
    const {imgSrc, foodDesc, foodName} = props.ele
    console.log(props.ele);
  return (
    <div className='dfc foot-item-container'>
        <Vec imgSrc = {imgSrc} />
        <div className='bold'>{foodName}</div>
        <div className='normal'>{foodDesc}</div>
    </div>
  )
}
