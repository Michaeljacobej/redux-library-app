import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";

import card from "../../components/card/card";
import corousel from "../../components/corousel/corousel";
import Pagination from "../../components/pagination/Pagination";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import navbar from "../../components/navbar/Navbar";

function Privatedashboard() {

  const [item, setBook] = useState(() => {
    return JSON.parse(localStorage.getItem("item")) || [];
  });
  const [search, setSearch] = useState("");
  const [defaultImage, setDefaultImage] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = item.slice(firstPostIndex, lastPostIndex);

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
    }));
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

 

  const AscendingDate = () => {
    const arr1 = item.map((obj) => {
      return { ...obj, date: new Date(obj.date) };
    });
    const sortedAsc = arr1.sort(
      (objA, objB) => Number(objB.date) - Number(objA.date)
    );
    setBook(sortedAsc);
  };

  const DescendingDate = () => {
    const arr1 = item.map((obj) => {
      return { ...obj, date: new Date(obj.date) };
    });
    const sortedDesc = arr1.sort(
      (objA, objB) => Number(objB.date) - Number(objA.date)
    );
    setBook(sortedDesc);
  };


  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(item));
  }, [item]);

  return (
    <div className="container-fluid row">
    
      <div className="main-content col-12 bg-none">
        {navbar(search,setSearch,AscendingDate,DescendingDate)}
        <div class="carousel my-5">
          <Slider {...settings}>
            {corousel(item, search, handleErrorImage)}
          </Slider>
        </div>

        <h3 className="header-listbook my-5">List Book</h3>
        <div className="group-card row d-flex">
        {/* <div className="pagination"> */}
        {card(currentPosts, search)}
          <Pagination
                totalPosts={item.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />

          {/* {card(item, search)} */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Privatedashboard;
