import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Detail from "./pages/detail/Detail";
import Login from "./pages/login/Login";
import Publicdashboard from "./pages/public dashboard/Publicdashboard";
import Privatedashboard from "./pages/private dashboard/Privatedashboard";
import Register from "./pages/register/Register";
import { useSelector } from "react-redux";
// import './App.css';

function App() {
  const {isAuth} = useSelector((state)=>state.user)
  console.log(isAuth)
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route path="/" element={<Dashboard/>}/>
         
         <Route path="/" element={<Dashboard/>}/> */}

        {isAuth ? (
          <Route path="/" element={<Publicdashboard />} />
        ) : (
          <Route path="/" element={<Privatedashboard />} />
        )}
      </Routes>
      
    </Router>
  );
}

export default App;
