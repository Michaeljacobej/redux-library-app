import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Detail from './pages/detail/Detail';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
// import './App.css';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/" element={<Dashboard/>}/>
     </Routes>
</Router>
  );
}

export default App;
