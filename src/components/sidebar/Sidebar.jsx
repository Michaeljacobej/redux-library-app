import React, { useEffect, useState } from "react";
import Niki from "../../images/account.png";
import "./Sidebar.css";
import { logout } from "../../features/userSlice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

function Sidebar(url_book,setUrl,title,setTitle,date,setDate,description,setDescription,item,handleSubmit) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const signout = (e) => {
    dispatch(
      logout({
        user: "",
      })
    );
    // navigate("/");
  };

  return (
    <div className="sidebar min-vh-100 ">
      <div className="admin header row ">
        <div className="admin profile-picture rounded-circle align-content-center justify-content-center mt-5">
          <img src={Niki} className="" alt="" />
        </div>
        <div className="admin profile-name justify-content-center mt-4">
          <h3>Niki Zevanya</h3>
        </div>
        <div className="admin profile-signout align-content-center justify-content-center align-items-center mt-3">
          <button
            type="button"
            className="btn btn-outline-dark"
            aria-label="Left Align"
            onClick={signout}
          >
            <span className="description-list fa fa-sign-out fa-lg" aria-hidden="true">
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
  );
}

export default Sidebar;
