import React from 'react'
import Heading from '../Heading'
import './food.css'
import group from '../../img/group.png'

import vec2 from '../../img/vec2.png'
import vec3 from '../../img/vec3.png'
import vec4 from '../../img/vec4.png'
import FoodItem from './FoodItem'


export default function Food() {

    let foodArr = [
        {
            foodName:"VEGETABLES",
            foodDesc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
            id:1,
            imgSrc:group,
        },
        {
            foodName:"WHOLE GRAINS",
            foodDesc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            id:2,
            imgSrc:vec2,
        },
        {
            foodName:"FRUITS",
            foodDesc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
            id:3,
            imgSrc:vec3,
        },
        {
            foodName:"HEALTHY PROTEIN",
            foodDesc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
            id:4,
            imgSrc:vec4,
        }
    ]
  return (
    <div className='food-container'>
        <div className='food-div'>
            <Heading cName={"FOOD GUIDE"} />
            <div className='food-item-div'>
                {
                    foodArr.map(ele =>{
                        return(
                            <FoodItem key ={ele.id} ele = {ele} />
                        )
                    })
                }
            </div>
            
        </div>
    </div>
  )
}
