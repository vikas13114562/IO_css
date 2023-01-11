import React from "react";
import CuisineItem from "./CuisineItem";
import './cuisine.css'

export default function Cuisine() {
  let text = [
    {
      mainHeading: "Indian Cuisine",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      mainHeading:"American Cuisine",
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
    },
    {
      mainHeading:"Chinese Cuisine",
      para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
  ];
  return( 
  <div className="df cuisine-container">
      {
        text.map((ele,ind) =>{
          return(
            
              <CuisineItem key ={ind}  mainHeading={ele.mainHeading} para = {ele.para} />
            
          )
        })
      }
  </div>
  );
}
