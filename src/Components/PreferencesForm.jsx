import React, { useState } from 'react';
import './PreferencesForm.css';

const PreferencesForm = () => {
  // State to store selected allergies and preferences
  const [allergies, setAllergies] = useState({
    alcohol: false,
    coconut: false,
    dairy: false,
    egg: false,
    fish: false,
    gluten: false,
    peanut: false,
    pork: false,
    sesame: false,
    shellfish: false,
    soy: false,
    treeNut: false,
  });

  const [preferences, setPreferences] = useState({
    cageFree: false,
    organic: false,
    halal: false,
    humane: false,
    local: false,
    sustainableSeafood: false,
    vegan: false,
    vegetarian: false,
  });

  // Function to handle toggling the state of allergies
  const handleAllergyToggle = (allergy) => {
    setAllergies((prevAllergies) => ({
      ...prevAllergies,
      [allergy]: !prevAllergies[allergy],
    }));
  };

  // Function to handle toggling the state of preferences
  const handlePreferenceToggle = (preference) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [preference]: !prevPreferences[preference],
    }));
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Here you can handle the form submission logic
    console.log("Selected Allergies:", allergies);
    console.log("Selected Preferences:", preferences);
  };

  return (
    <div className="preferences-form">
      <h2>User Preferences & Allergies Form</h2>
      <p>Please indicate your preferences and allergies below. Clicking a checkbox will toggle its state.</p>
      
      <h3>Allergies:</h3>
      <div className='allergies'>
        {Object.keys(allergies).map((allergy) => (
          <button
            className={`btn ${allergies[allergy] ? 'active' : ''} ${allergies[allergy] ? 'clicked' : ''}`}
            key={allergy}
            onClick={() => handleAllergyToggle(allergy)}
            style={{ fontSize: allergies[allergy] ? '12px' : '16px' }}
          >
            {allergy.replace(/([A-Z])/g, ' $1').toUpperCase()} {/* Add space before each capital letter */}
          </button>
          ))}
        </div>

        <h3>Preferences:</h3>
      <div className='preferences'>
      {Object.keys(preferences).map((preference) => (
    <button
      className={`btn ${preferences[preference] ? 'active' : ''} ${preferences[preference] ? 'clicked' : ''}`}
      key={preference}
      onClick={() => handlePreferenceToggle(preference)}
      style={{ fontSize: preferences[preference] ? '12px' : '16px' }}
    >
      {preference.replace(/([A-Z])/g, ' $1').toUpperCase()} {/* Add space before each capital letter */}
    </button>
        ))}
        <button className="btn" onClick={handleSubmit}>Submit</button>
      </div>

    </div>
  );
};

export default PreferencesForm;