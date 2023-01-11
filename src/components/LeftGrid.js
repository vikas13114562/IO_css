import React from 'react'
import './style.css'

export default function LeftGrid() {
    let Arrow = ">"
  return (
    <div className="top-container-left">
                <div className="top-container-left-bottom">
                    <div className="left-bottom-text">
                        <h3>Pizza is a savory dish of Italian origin</h3>
                        <p>
                            Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry.
                        </p>
                    </div>
                    <div className="left-bottom-btn">
                        <div className="btn">
                            <div>Explore</div>
                            <div className="arrow">{Arrow}</div>
                        </div>
                        <div className="rate">
                            <i className="fa-regular fa-star"></i>
                            <div>Rated</div>
                        </div>
                    </div>
                </div>
                
            </div>
  )
}
