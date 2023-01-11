import React from 'react'
import './style.css'

export default function Heading({cName}) {
  return (
    <div className="heading">
        <div id="heading-text">{cName}</div>
        <div className="underline"></div>
    </div>
  )
}
