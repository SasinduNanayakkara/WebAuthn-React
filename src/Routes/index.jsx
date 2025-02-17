import React from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

function PageRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  )
}

export default PageRoutes;