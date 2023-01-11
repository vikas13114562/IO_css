import React from "react";
import "./style.css";

export default function RightGrid() {
  let Arrow = ">";
  return (
    <div className="top-container-right">
      <div className="grid first">
        <div className="top-container-right-bottom">
          <div className="right-bottom-text">
            <h3>Crispy French Fries</h3>
            <p>Lorem Ipsum is simply dummy text.</p>
          </div>
          <div className="right-bottom-btn">
            <div className="right-btn">
              <div>Explore</div>
              <div className="arrow">{Arrow}</div>
            </div>
            <div className="right-rate">
              <i className="fa-regular fa-star"></i>
              <div>Rated</div>
            </div>
          </div>
        </div>
      </div>
      <div className="second grid">
        <div className="top-container-right-bottom">
          <div className="right-bottom-text">
            <h3>Paneer Tikka</h3>
            <p id="second-p" ></p>
          </div>
          <div className="right-bottom-btn">
            <div className="right-btn">
              <div>Explore</div>
              <div className="arrow">{Arrow}</div>
            </div>
            <div className="right-rate">
              <i className="fa-regular fa-star"></i>
              <div>Rated</div>
            </div>
          </div>
        </div>
      </div>

      <div className="third grid">
        <div className="top-container-right-bottom black">
          <div className="right-bottom-text white">
            <h3 >Macaroon</h3>
            <p>Lorem Ipsum is simply dummy text.</p>
          </div>
          <div className="right-bottom-btn">
            <div className="right-btn" style={{color:"white"}}>
              <div>Explore</div>
              <div className="arrow">{Arrow}</div>
            </div>
            <div className="right-rate" style={{color:"white"}} >
              <i className="fa-regular fa-star"></i>
              <div>Rated</div>
            </div>
          </div>
        </div>
      </div>
      <div className="fourth grid">
        <div className="top-container-right-bottom">
          <div className="right-bottom-text">
            <h3>Doughnut</h3>
            <p>Lorem Ipsum is simply typesetting industry.</p>
          </div>
          <div className="right-bottom-btn">
            <div className="right-btn">
              <div>Explore</div>
              <div className="arrow">{Arrow}</div>
            </div>
            <div className="right-rate">
              <i className="fa-regular fa-star"></i>
              <div>Rated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
