import React from 'react'
import Heading from './Heading'
import LeftGrid from './LeftGrid'
import RightGrid from './RightGrid'
import './style.css'

export default function TopContainer() {
    
  return (
    <div className='top-container'>
        <Heading cName = "VARIETIES"/>
        <div className='top-container-main'>
            <LeftGrid />
            <RightGrid />
        </div>

    </div>
  )
}
