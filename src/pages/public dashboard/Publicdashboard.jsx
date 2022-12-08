import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";

import Pagination from "../../components/pagination/Pagination";
import card from "../../components/card/card";
import corousel from "../../components/corousel/corousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import navbar from "../../components/navbar/Navbar";
// import Dashboard from './pages/dashboard/Dashboard';

function Publicdashboard() {
  const id = uuidv4();
  const [url_book, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [item, setBook] = useState(() => {
    return JSON.parse(localStorage.getItem("item")) || [];
  });
  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const [search, setSearch] = useState("");

  const [defaultImage, setDefaultImage] = useState({});

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
    // initialSlide: 0,
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
    // className: "center",
    // infinite: true,
    // centerPadding: "60px",
    // slidesToShow: 5,
    // swipeToSlide: true,
    // afterChange: function(index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // }

  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      let newBook = {
        id: id,
        url: url_book,
        title: title,
        date: date,
        description: description,
      };
      setBook([newBook, ...item]);
      setUrl("");
      setTitle("");
      setDate("");
      setDescription("");
      // console.log(item);
    } else {
      setUrl("");
      setTitle("");
      setDate("");
      setDescription("");
    }
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
      <div className="sidebar col-sm-3 min-vh-100 ">
        {Sidebar(
          url_book,
          setUrl,
          title,
          setTitle,
          date,
          setDate,
          description,
          setDescription,
          item,
          handleSubmit
        )}
      </div>
    
      <div className="main-content col-9 bg-none">
        {navbar(search,setSearch,AscendingDate,DescendingDate)}
        <div class="carousel my-5">
          <Slider {...settings}>
            {corousel(item, search, handleErrorImage)}
          </Slider>
        </div>

        <h3 className="header-listbook my-5">List Book</h3>
        <div className="group-card row d-flex">

          {card(currentPosts, search)}
          <Pagination
                totalPosts={item.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />

          {/* </div> */}
          </div>
      </div>



    


    </div>
  );
}

export default Publicdashboard;
