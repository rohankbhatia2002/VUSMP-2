import React from 'react';
import './HeroSection.css'; // Ensures CSS styles are correctly applied
import VUSMP_logo from '../Images/VUSMP_logo.webp';

const HeroSection = () => {
  return (
    <>
      <main>
        <div className="hero_container">
          <img src={VUSMP_logo} alt="VUSMP Logo" />
          <div className="hero_text">
            <h1>Your perfect student meal planning experience</h1>
            <p>An application designed to help you achieve your goals while on the meal plan!</p>
            <button className="hero_button">Sign Up</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;