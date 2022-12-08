import React, { Fragment, useState } from "react";
import "./Navbar.css";
import Logo from "../../images/logo.png";
import Menu from "../../images/menu .png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import privatebuttonlogin from "../privatebutton/privatebuttonlogin";
import privatebuttonsignup from "../privatebutton/privatebuttonsignup";

function navbar(
  search,
  setSearch,
  AscendingDate,
  DescendingDate,
  login,
  signup
) {
  const { isAuth } = useSelector((state) => state.user);
  // console.log(isAuth);
  // const isAuth = true;
  let navigate = useNavigate();

  const loginbutton = (e) => {
    navigate("/login");
  };

  const signupbutton = (e) => {
    navigate("/register");
  };

  return (
    <nav class="navbar">
      {isAuth?
      <a href="#">
        <img src={Menu} alt="" />
      </a>
      :null}
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
            <span class="dropdown-item" >
                Price high
              </span>
            </li>
            <li>
            <span class="dropdown-item" >
                Price Low
              </span>
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
              <span class="dropdown-item" onClick={AscendingDate}>
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
      {isAuth ? null :  privatebuttonlogin(loginbutton) }

      {isAuth ? null : privatebuttonsignup(signupbutton) }

      <a class="logo-navbar d-flex" href="#">
        <img src={Logo} alt="" className="logo-library" />
        <span className="description-logo">Library</span>
      </a>
    </nav>
  );
}

export default navbar;
