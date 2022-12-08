import React from "react";
import "./corousel.css";
import Flickity from "react-flickity-component";
// import "flickity/css/flickity.css";

export default function corousel(item,search,handleErrorImage) {
  return item.filter((item)=> item.title.toLowerCase().includes(search)
  ).sort((userA, userB) => Number(userA.date) - Number(userB.date))
    .map((item) => (
    <div className="card">
      <div className="card-top">
        <img src={item.url} alt={item.url} onError={handleErrorImage} />
 
      </div>
      <div className="card-bottom">
        <h4>{item.title}</h4>
        <span className="category">{item.description}</span>
      </div>
    </div>
  ));
}



// export default function corousel(item,search,handleErrorImage) {
//   return item.filter((item)=> item.title.toLowerCase().includes(search)
//   ).sort((userA, userB) => Number(userA.date) - Number(userB.date))
//     .map((item) => (
//       <div className="swiper-container">
//       <div className="swiper-wrapper">
//           <div className="swiper-slide">
//               <div className="info">
//                   <h5>Omor Faruk <br/> <span>Web Developer</span></h5>
//               </div>
//           </div>
        
//       </div>
  
//       <div class="swiper-pagination"></div>
//   </div>
//   ));
// }

