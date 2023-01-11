import React from 'react'
import '../diff-cuisine/cuisine.css'
import insta from '../../img/insta.png'
import facebook from '../../img/facebook.png'
import twitter from '../../img/twitter.png'

export default function Footer() {
  return (
    <div className='footer df'>
        <div className='social dfjc'><img  src={insta} alt = "insta" /></div>
        <div className='social dfjc'><img  src = {facebook} alt = "facebook" /></div>
        <div className='social dfjc'><img  src ={twitter} alt ="twitter" /></div>
    </div>
  )
}
