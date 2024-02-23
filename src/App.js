import React from 'react';
import Navbar from './Components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path="/login" element={<LoginSignup />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
