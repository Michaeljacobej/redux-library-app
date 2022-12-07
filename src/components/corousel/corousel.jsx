import React from "react";
import "./corousel.css";



export default function corousel(item,search,handleErrorImage) {
  return item.filter((item)=> item.title.toLowerCase().includes(search)
  ).sort((userA, userB) => Number(userA.date) - Number(userB.date))
    .map((item) => (
    <div className="card">
      <div className="card-top">
        <img src={item.url} alt={item.url} onError={handleErrorImage} />
        <h1>{item.title}</h1>
      </div>
      <div className="card-bottom">
        <h3>{item.title}</h3>
        <span className="category">{item.description}</span>
      </div>
    </div>
  ));
}
