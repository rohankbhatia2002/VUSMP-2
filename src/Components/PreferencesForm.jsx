import React, { useState, useEffect } from 'react';
import './PreferencesForm.css';
import { wait } from '@testing-library/user-event/dist/utils';
import { Link, useNavigate, UNSAFE_useScrollRestoration } from 'react-router-dom'

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

  const navigate = useNavigate();

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
  //navigate('/BmrCalculator');
  


  // Separate selected and unselected allergies
  const selectedAllergies = {};
  const unselectedAllergies = {};
  Object.keys(allergies).forEach((allergy) => {
    if (allergies[allergy]) {
      selectedAllergies[allergy] = true;
    } else {
      unselectedAllergies[allergy] = false;
    }
  });

  // Separate selected and unselected preferences
  const selectedPreferences = {};
  const unselectedPreferences = {};
  Object.keys(preferences).forEach((preference) => {
    if (preferences[preference]) {
      selectedPreferences[preference] = true;
    } else {
      unselectedPreferences[preference] = false;
    }
  });

  // Update state with reordered values
  setAllergies({ ...selectedAllergies, ...unselectedAllergies });
  setPreferences({ ...selectedPreferences, ...unselectedPreferences });
};

return (
  <div className="preferences-form">
    <h2>User Preferences & Allergies Form</h2>
    <p>Please indicate your preferences and allergies below. Clicking a checkbox will toggle its state.</p>

    <h3>Allergies:</h3>
    <div className='allergies'>
      {Object.keys(allergies).map((allergy) => (
        <button
          className={`button ${allergies[allergy] ? 'active' : ''}`}
          key={allergy}
          onClick={() => handleAllergyToggle(allergy)}
          style={{ fontSize: allergies[allergy] ? '12px' : '16px' }}
        >
          {allergy.charAt(0).toUpperCase() + allergy.slice(1)}

        </button>
      ))}
    </div>

    <h3>Preferences:</h3>
    <div className='preferences'>
      {Object.keys(preferences).map((preference) => (
        <button
          className={`button ${preferences[preference] ? 'active' : ''} ${preferences[preference] ? 'clicked' : ''}`}
          key={preference}
          onClick={() => handlePreferenceToggle(preference)}
          style={{ fontSize: preferences[preference] ? '12px' : '16px' }}
        >
          {preference.charAt(0).toUpperCase() + preference.slice(1)} {/* Capitalize the first letter */}

        </button>
      ))}
    </div>
    <div className="submit-container"> {/* Wrapper for the submit button */}
      <br></br>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  </div>
);
};

export default PreferencesForm;