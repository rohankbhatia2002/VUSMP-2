import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthContext';
import Navbar from './Components/navbar';
import Footer from './Components/Footer';
import LoginSignup from './Pages/LoginSignup';
import HeroSection from './Pages/HeroSection';
import PreferencesForm from './Components/PreferencesForm';
import Dashboard from './Pages/Dashboard';
import Calculator from './Components/bmrCalculator';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element = {<HeroSection/>} />
          <Route path="/login" element={<LoginSignup />}/>
          <Route path="/signup" element={<LoginSignup />}/>
          <Route path='/profile' element = {<PreferencesForm/>} />
          <Route path='/dashboard' element = {<Dashboard/>} />
          <Route path='/bmrCalculator' element = {<Calculator/>} />
        </Routes>
        <Footer/>
        </AuthProvider>
      </Router>
  );
}

export default App;
