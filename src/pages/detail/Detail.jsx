import React, { useEffect, useState } from "react";
import "./Detail.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const [url_book, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let navigate = useNavigate();
  // const {isAuth} = useSelector((state)=>state.user)
  // const isAuth =true;
  const isAuth =true;

  const handleSubmit = (e) => {
    e.preventDefault();
    var item = JSON.parse(localStorage.getItem("item"));

    if (item) {
      item.map(editBook);
      localStorage.setItem("item", JSON.stringify(item));
    }
  };



  const handleDelete = (e) => {
    e.preventDefault();
    var item = JSON.parse(localStorage.getItem("item"));
    const result = window.location.href.split("/").reverse()[0];
    let count;
    if (item) {
      item.map(deleteBook);
      for (let i = 0; i < item.length; i++) {
        if (item[i]["id"] === result) {
          count = i;
        }
      }
      item.splice(count, 1);
      localStorage.setItem("item", JSON.stringify(item));
    }
  };

  function deleteBook(book) {
    const result = window.location.href.split("/").reverse()[0];
    if (result === book.id) {
      book.url = "";
      book.title = "";
      book.description = "";
      document.getElementById("title-book").innerHTML = "";
      document.getElementById("description-book").innerHTML = "";
      document.getElementById("background-header").style.backgroundImage =
        "url(" + "" + ")";
    }
  }

  function editBook(book) {
    const result = window.location.href.split("/").reverse()[0];
    if (result === book.id) {
      book.url = url_book;
      book.title = title;
      book.description = description;
      document.getElementById("title-book").innerHTML = book.title;
      document.getElementById("description-book").innerHTML = book.description;
      document.getElementById("background-header").style.backgroundImage =
        "url(" + book.url + ")";
    }
  }

  useEffect(() => {
    let item = JSON.parse(localStorage.getItem("item"));
    if (item) {
      item.map(allBook);
    }
  }, []);

  function allBook(book) {
    const result = window.location.href.split("/").reverse()[0];
    if (result === book.id) {
      document.getElementById("title-book").innerHTML = book.title;
      document.getElementById("date-book").innerHTML = book.date;
      document.getElementById("description-book").innerHTML = book.description;
      document.getElementById("background-header").style.backgroundImage =
        "url(" + book.url + ")";
    }
  }

  const back = (e) => {
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="background-header row d-xxl-block" id="background-header">
        <div className="edit-detail-card d-flex justify-content-between ">
          <div className="button-back">
            <button
              onClick={back}
              className="btn bg-white rounded-circle shadow p-3"
            >
              <i
                className="fa fa-arrow-left"
                style={{ fontSize: "20px", color: "black" }}
              ></i>
            </button>
          </div>
          {isAuth?
          <div className="edit-detail row d-flex">
            <a
              href="#"
              className="nav-link col font-medium text-white"
              data-bs-toggle="modal"
              data-bs-target="#editBook"
            >
              Edit
            </a>
            <a
              href="#"
              className="nav-link col font-medium text-white"
              data-bs-toggle="modal"
              data-bs-target="#deleteBook"
              onClick={handleDelete}
            >
              Delete
            </a>
          </div>
          :null}
        </div>

        {/*add button  */}
        <div
          className="modal fade"
          id="editBook"
          tabindex="-1"
          aria-labelledby="editBook"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content p-4">
              <div className="modal-header border-0">
                <h1 className="modal-title font-medium fs-4">Edit data</h1>
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

        {/* delete button */}
        <div
          className="modal fade"
          id="deleteBook"
          tabindex="-1"
          aria-labelledby="deleteBook"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content p-2">
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body pb-5">
                <div className="d-flex flex-column w-100 align-items-center justify-content-center">
                  <div className="mb-3">
                    <i
                      data-feather="check-circle"
                      stroke="#99D815"
                      width="80"
                      height="80"
                    ></i>
                  </div>
                  <p className="text-center fs-5 mb-0">
                    Data{" "}
                    <span id="titleDelete" className="font-medium">
                      DILAN 1990
                    </span>{" "}
                    berhasil dihapus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content row d-flex bg-white ms-5 me-3">
        <div className="col-8 mt-3">
          <div className="d-flex row">
            <div className="button-name mt-3">
              <button type="button" className="btn btn-warning text-white">
                Novel
              </button>
            </div>
            <div className="d-flex detail-name col align-content-between justify-content-between mt-2">
              <h1 className="title-book" id="title-book"></h1>

              <h3 className="available-book">Available</h3>
            </div>

            <div className="date-book" >
              <h5 id="date-book"></h5>
            </div>
            <div className="description-book mt-3" id="description-book"></div>
          </div>
        </div>

        <div className="col-4 borrow-book-row flex-column-reverse">
          <div className="borrow-book d-flex row">
            <button type="button" className="btn btn-warning btn-lg text-white">
              Borrow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
