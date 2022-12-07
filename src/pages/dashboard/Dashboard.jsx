import React, { useEffect, useState } from "react";
import Niki from "../../images/account.png";
import "./Dashboard.css";
import Logo from "../../images/logo.png";
import Menu from "../../images/menu .png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { logout } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import card from "../../components/card/card";
import corousel from "../../components/corousel/corousel";

function Dashboard() {
  const id = uuidv4();
  const [url_book, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });
  const [search, setSearch] = useState("");
  const [item, setBook] = useState(() => {
    return JSON.parse(localStorage.getItem("item")) || [];
  });
  // const {isAuth} = useSelector((state)=>state.user)

    const isAuth =true;

  const [defaultImage, setDefaultImage] = useState({});

  const dispatch = useDispatch();

  let navigate = useNavigate();

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

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
    }));
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
    
    } else {
      setUrl("");
      setTitle("");
      setDate("");
      setDescription("");
    }
  };

  const signout = (e) => {
    dispatch(
      logout({
        user: null,
      })
    );
    navigate("/");
  };

  const login = (e) => {
    navigate("/login");
  };

  const signup = (e) => {
    navigate("/register");
  };

  
  

	const AscendingDate = () => {
    const arr1 =item.map(obj => {
      return {...obj, date: new Date(obj.date)};
    });
    const sortedAsc = arr1.sort((objA, objB) => Number(objB.date) - Number(objA.date));
		setBook(sortedAsc);
	};


  const DescendingDate = () => {
    const arr1 =item.map(obj => {
      return {...obj, date: new Date(obj.date)};
    });
    const sortedDesc = arr1.sort((objA, objB) => Number(objB.date) - Number(objA.date));
		setBook(sortedDesc);
	};


  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("item"));
    if (item) {
      setBook(item);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(item));
  }, [item]);

  return (
    <div className="container-fluid">
      ` ` {/* private */}
      {isAuth ? (
        <div className="row">
          <div className="sidebar col-sm-4 min-vh-100 ">
            <div className="admin header row ">
              <div className="admin profile-picture rounded-circle align-content-center justify-content-center mt-5">
                <img src={Niki} className="" alt="" />
              </div>
              <div className="admin profile-name justify-content-center mt-4">
                <h1>{/* {fullname? {fullname} :null} */}</h1>
              </div>
              <div className="admin profile-signout align-content-center justify-content-center align-items-center mt-3">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  aria-label="Left Align"
                  onClick={signout}
                >
                  <span className="fa fa-sign-out fa-lg" aria-hidden="true">
                    Sign Out
                  </span>
                </button>
              </div>
            </div>

            <div className="list-menu d-flex row  mt-5">
              <a href="#">
                <span
                  className="description-list fa fa-search fa-lg ms-5"
                  aria-hidden="true"
                >
                  Explore
                </span>
              </a>
            </div>
            <div className="list-menu d-flex row  mt-5">
              <a href="#">
                <span
                  className="description-list fa fa-archive fa-lg ms-5"
                  aria-hidden="true"
                >
                  History
                </span>
              </a>
            </div>

            <div className="admin list-menu row mt-5">
              <a href="#" data-bs-toggle="modal" data-bs-target="#addbook">
                <span
                  className="description-list fa fa-plus fa-lg ms-5"
                  aria-hidden="true"
                >
                  Add Book
                </span>
              </a>
            </div>

            {/*add button  */}
            <div
              className="modal fade"
              id="addbook"
              tabindex="-1"
              aria-labelledby="addbook"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content p-4">
                  <div className="modal-header border-0">
                    <h1 className="modal-title font-medium fs-4">Add data</h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="row mb-3">
                      <div className="col-md-2 col-lg-2 col-form-label font-medium">
                        Url image
                      </div>
                      <div className="col-md-10 col-lg-10">
                        <input
                          type="text"
                          value={url_book}
                          onChange={(e) => setUrl(e.target.value)}
                          name="url"
                          className="form-control py-2"
                          placeholder="Url image ..."
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-2 col-lg-2 col-form-label font-medium">
                        Title
                      </div>
                      <div className="col-md-10 col-lg-10">
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          name="tittle"
                          className="form-control py-2"
                          placeholder="Title ..."
                        />
                      </div>
                    </div>
                    <form class="row mb-3">
                      <label
                        for="date"
                        class="col-md-2 col-lg-2 col-form-label font-medium"
                      >
                        Date
                      </label>
                      <div class="col-md-10 col-lg-10">
                        <div class="input-group date" id="datepicker">
                          <input
                            type="date"
                            class="form-control"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                          />
                          <span class="input-group-append"></span>
                        </div>
                      </div>
                    </form>
                    <div className="row mb-3">
                      <div className="col-md-2 col-lg-2 col-form-label font-medium">
                        Description
                      </div>
                      <div className="col-md-10 col-lg-10">
                        <textarea
                          className="form-control"
                          name="descriptionn"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          rows="6"
                          placeholder="Description ..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer border-0">
                    <button
                      onClick={handleSubmit}
                      id="btn"
                      type="save"
                      className="btn btn-warning"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-content col-8 bg-none">
            <nav class="navbar">
              <a href="#">
                <img src={Menu} alt="" />
              </a>
              <ul class="nav nav-tabs">
                <li class="nav-item dropdown mx-3">
                  <a
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    All Categories
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Price High
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Price Low
                      </a>
                    </li>   
                  </ul>
                </li>
                <li class="nav-item dropdown mx-3">
                  <a
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    All Time
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <span
                       class="dropdown-item" onClick={AscendingDate}>
                        Sort By Oldest
                        </span>
                    </li>
                    <li>
                    <span class="dropdown-item" onClick={DescendingDate}>
                        Sort By Newest
                        </span>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="search-book col d-flex mx-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Book"
                  aria-label="Search Book"
                  aria-describedby="button-addon2"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}

                />
                <span class="input-group-text bg-white" id="basic-addon2">
                  <i class="fa fa-search " aria-hidden="true"></i>
                </span>
              </div>
              <a class="logo-navbar d-flex" href="#">
                <img src={Logo} alt="" className="logo-library" />
                <span className="description-logo">Library</span>
              </a>
            </nav>

            {/* carousel */}
            <div class="carousel my-5">
              <Slider {...settings}>
                {corousel(item,search,handleErrorImage)}
              </Slider>
            </div>

            {/* {cards} */}
            <h2 className="header-listbook my-5">List Book</h2>
            <div className="group-card row d-flex">
  
                {card(item,search)}

              {/* {cards(item)} */}
            </div>
          </div>
        </div>
      ) :null

      // <div className="row">
      //     <div className="main-content bg-none">
      //       <nav class="navbar d-flex">
      //         <ul class="nav nav-tabs">
      //           <li class="nav-item dropdown mx-3">
      //             <a
      //               class="nav-link dropdown-toggle"
      //               data-bs-toggle="dropdown"
      //               href="#"
      //               role="button"
      //               aria-expanded="false"
      //             >
      //               All Categories
      //             </a>
      //             <ul class="dropdown-menu">
      //               <li>
      //                 <a class="dropdown-item" href="#">
      //                   Action
      //                 </a>
      //               </li>
      //               <li>
      //                 <a class="dropdown-item" href="#">
      //                   Another action
      //                 </a>
      //               </li>
      //               <li>
      //                 <a class="dropdown-item" href="#">
      //                   Something else here
      //                 </a>
      //               </li>
      //               <li>
      //                 <hr class="dropdown-divider" />
      //               </li>
      //               <li>
      //                 <a class="dropdown-item" href="#">
      //                   Separated link
      //                 </a>
      //               </li>
      //             </ul>
      //           </li>
      //           <li class="nav-item dropdown mx-3">
      //             <a
      //               class="nav-link dropdown-toggle"
      //               data-bs-toggle="dropdown"
      //               href="#"
      //               role="button"
      //               aria-expanded="false"
      //             >
      //               All Time
      //             </a>
      //             <ul class="dropdown-menu">
      //               <li>
      //                 <a class="dropdown-item" href="#">
      //                   Sort By Date
      //                 </a>
      //               </li>
      //               <li>
      //                 <a class="dropdown-item" href="#">
      //                   Sort By Year
      //                 </a>
      //               </li>
      //             </ul>
      //           </li>
      //         </ul>

      //         <div className="search-book col d-flex mx-3">
      //           <input
      //             type="text"
      //             class="form-control"
      //             placeholder="Search Book"
      //             aria-label="Search Book"
      //             aria-describedby="button-addon2"
      //             value={search}
      //             onChange={(e) => setSearch(e.target.value)}

      //             // onClick={search}
      //           />
      //           <span class="input-group-text bg-white" id="basic-addon2">
      //             <i class="fa fa-search " aria-hidden="true"></i>
      //           </span>
      //         </div>

      //         <button
      //           type="button"
      //           className="btn btn-outline-dark mx-1"
      //           aria-label="Left Align"
      //           onClick={login}
      //         >
      //           Login
      //         </button>

      //         <button
      //           type="button"
      //           className="btn btn-outline-dark mx-1"
      //           aria-label="Left Align"
      //           onClick={signup}
      //         >
      //           Signup
      //         </button>

      //         <a class="logo-navbar col-2 d-flex" href="#">
      //           <img src={Logo} alt="" className="logo-library mx-3" />
      //           <span className="description-logo">Library</span>
      //         </a>
      //       </nav>

      //       {/* carousel */}
      //       <div class="carousel my-5">
      //         <Slider {...settings}>
      //         {item.filter((item)=> item.title.toLowerCase().includes(search)
      //         ).map((item) => (
      //             <div className="card">
      //               <div className="card-top">
      //                 <img
      //                   src={item.url}
      //                   alt={item.url}
      //                   onError={handleErrorImage}
      //                 />
      //                 <h1>{item.title}</h1>
      //               </div>
      //               <div className="card-bottom">
      //                 <h3>{item.title}</h3>
      //                 <span className="category">{item.description}</span>
      //               </div>
      //             </div>
      //           ))}
      //         </Slider>
      //       </div>

      //       {/* {cards} */}
      //       <h2 className="header-listbook my-5">List Book</h2>
      //       <div className="group-card row d-flex">
      //         {item.filter((item)=> item.title.toLowerCase().includes(search)
      //         ).map((item) => (
      //           <div class="cardd">
      //             <a href={"/detail/" + item.id}>
      //               <img src={item.url} class="card-img-top" alt="..." />
      //             </a>
      //             <div class="card-body">
      //               <h5 class="card-title" id="card-title">
      //                 {item.title}
      //               </h5>
      //               <p class="card-text" id="card-description">
      //                 {item.description}
      //               </p>
      //             </div>
      //           </div>
      //         ))}
      //       </div>
      //     </div>
      // </div>
      }
    </div>
  );
}

export default Dashboard;
