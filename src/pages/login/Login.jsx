import React, { useState } from "react";
import "./Login.css";
import Logo from "../../images/logo.png";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const datauser = JSON.parse(localStorage.getItem("userlibrary"));
    
    if (datauser) {
      for (let i = 0; i < datauser.length; i++) {
        if ( email ===  datauser[i]["email"] && password === datauser[i]["password"]  ) 
        {
          dispatch(
            login({
              username:datauser[i]["username"],
              fullname:datauser[i]["fullname"],
              emailuser:datauser[i]["email"],
              password: datauser[i]["password"]
            })
          );    
              navigate("/");
        }
      }
    }
  };

  const register = (e) => {
    navigate("/register");
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
          <form className="d-flex px-5 py-3 row">
            <div className="header-logo">
              <h3 className="login-register">
                Login <br />
              </h3>
              <span className="description">
                Welcome back, Please login <br /> to your account
              </span>
            </div>

            <div className="email-password py-4">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label for="floatingPassword">Password</label>
              </div>
            </div>

            <div className="checkbox-email row px-4">
              <div className="form-check col">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Remember me
                </label>
              </div>
              <div className="form-forgot col">
                <a href="">
                  <span> Forgot password</span>
                </a>
              </div>
            </div>
            <div className="login-signup row py-5">
              <button
                type="button"
                className="btn btn-dark btn-sm col m-2"
                onClick={handleSubmit}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-light btn-sm col m-2"
                onClick={register}
              >
                Signup
              </button>
            </div>
          </form>

          <div className="login-footer row d-flex ms-4">
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

export default Login;
