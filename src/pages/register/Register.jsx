import React, { useEffect, useState } from "react";
import "./Register.css";
import Logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Register() {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLibrary, setUserLibrary] = useState(() => {
    return JSON.parse(localStorage.getItem("userlibrary")) || [];
  });

  let navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const datauser = { username, fullname, email, password };
    userLibrary.push(datauser);
    localStorage.setItem("userlibrary", JSON.stringify(userLibrary));
    alert("Sign Up Completed");
    navigate("/login");
  };

  const login = (e) => {
    navigate("/login");
  };

  return (
    <div className="container-fluid">
      <div className="d-flex row">
        <div className=" background-images col-md-8 min-vh-100 justify-content-sm-between align-content-sm-between">
          <div className="row cover-header-footer">
            <h1 className="p-2 ms-5 mt-4 text-white">
              Book is a window <br />
              to the world
            </h1>
            <p className="p-2 ms-3 mt-auto text-white">
              Photo by Mark Pan4ratte on Unsplash
            </p>
          </div>
        </div>
        <div className="col-md-4 bg-white">
          <div className="row"></div>
          <div className="logo d-flex flex-row-reverse">
            <img src={Logo} className="m-3" alt="" />
          </div>
          <form action="" className="d-flex px-5 py-3 row">
            <div className="header-logo">
              <h3 className="login-register">
                Register
                <br />
              </h3>
              <span className="description">
                Welcome back, Please login <br /> to your account
              </span>
            </div>

            <div className="email-password py-4">
              <div className="form-floating">
                <input
                  type="username"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label for="floatingInput">Username</label>
              </div>

              <div className="form-floating">
                <input
                  type="fullname"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
                <label for="floatingInput">Fullname</label>
              </div>

              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="floatingInput">Email Address</label>
              </div>

              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label for="floatingPassword">Password</label>
              </div>
            </div>

            <div className="login-signup row py-2">
              <button
                type="button"
                className="btn btn-dark btn-sm col m-2"
                onClick={handleSignup}
              >
                Signup
              </button>
              <button
                type="button"
                className="btn btn-light btn-sm col m-2"
                onClick={login}
              >
                Login
              </button>
            </div>
          </form>

          <div className="login-footer row d-flex ms-4 mt-5">
            <span>By signing up, you agree to Book's</span>
            <span>
              Terms and Conditions <span>&</span> Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
