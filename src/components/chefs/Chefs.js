import React from 'react'
import './chefs.css'
import '../diff-cuisine/cuisine.css'
import pic1 from '../../img/pic1.png'
import pic2 from '../../img/pic2.png'
import pic3 from '../../img/pic3.png'
import ChefProfile from './ChefProfile'

export default function Chefs() {
    let chefsDetails = [
        {
            fname:"Eileen Johnson",
            desc:"Executive Chef, USA",
            imgSrc:pic1,
            id:1,
            style:{color:"white",backgroundColor: "transparent"}
        },
        {
            fname:"Robert Downey Jr",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imgSrc:pic2,
            id:2,
            style:{color:"black",backgroundColor: "white",padding:"40px 40px"}
        },
        {
            fname:"Amanda Dority",
            desc:"Sous Chef, India",
            imgSrc:pic3,
            id:3,
            style:{color:"white",backgroundColor: "transparent"}
        }
    ]
    
  return (
    <div className='chefs-container'>
        <div className='chefs'>
            <div className='df chef-div'>
            {
                chefsDetails.map(ele =>{
                    return(
                        <ChefProfile key = {ele.id} ele = {ele} />
                    )
                })
            }
            </div>

        </div>
    </div>
  )
}
