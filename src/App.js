import React from 'react';
import Navbar from './Components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import HeroSection from './Pages/HeroSection';
import PreferencesForm from './Pages/PreferencesForm';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<HeroSection/>} />
        <Route path="/login" element={<LoginSignup />}/>
        <Route path="/signup" element={<LoginSignup />}/>
        <Route path='/profile' element = {<PreferencesForm/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
