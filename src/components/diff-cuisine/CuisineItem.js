import React from 'react'
import './cuisine.css'

export default function CuisineItem({mainHeading,para}) {
  return (
    <div className='dfc item'>
        <div className='bold'>{mainHeading}</div>
        <div className='normal'>{para}</div>
    </div>
  )
}
