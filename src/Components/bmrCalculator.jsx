import React, { useState } from 'react';
import './bmrCalculator.css';

function BMRCalculator() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState(''); // Used for metric system
  const [feet, setFeet] = useState(''); // For imperial system
  const [inches, setInches] = useState(''); // For imperial system
  const [unit, setUnit] = useState('metric');
  const [activityLevel, setActivityLevel] = useState('1.2');
  const [result, setResult] = useState('');

  const convertHeightToCm = () => {
    // Convert height from feet and inches to centimeters if imperial is selected
    if (unit === 'imperial') {
      const totalInches = (parseInt(feet) * 12) + parseInt(inches);
      return totalInches * 2.54; // 1 inch = 2.54 cm
    }
    return height; // If metric, height is already in cm
  };

  const calculateBMR = () => {
    const heightInCm = convertHeightToCm();
    const weightInKg = unit === 'imperial' ? weight * 0.453592 : weight; // Convert lbs to kg if imperial
    let bmr = 0;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weightInKg) + (4.799 * heightInCm) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weightInKg) + (3.098 * heightInCm) - (4.330 * age);
    }
    bmr *= parseFloat(activityLevel);
    setResult(`Your daily calorie needs based on activity level is ${Math.floor(bmr)} calories/day.`);
    console.log(gender)
    console.log(age)
    console.log(`${heightInCm} cm`)
    console.log(activityLevel)
    console.log(Math.floor(bmr))
  };

    const handleGoalSelection = (goal) => {
      console.log(goal);
    };

  return (
    <div>
      <h2>BMR Calculator</h2>
      <form>
        {/* Gender */}
        <label htmlFor="gender">Gender:</label>
        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select><br />

        {/* Unit */}
        <label htmlFor="unit">Unit:</label>
        <select id="unit" value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="metric">Metric (kg, cm)</option>
          <option value="imperial">Imperial (lbs, ft/in)</option>
        </select><br />

        {/* Age */}
        <label htmlFor="age">Age (years):</label>
        <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required /><br />

        {/* Weight */}
        <label htmlFor="weight">Weight ({unit === 'metric' ? 'kg' : 'lbs'}):</label>
        <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required /><br />

        {/* Height - Conditional Rendering */}
        {unit === 'metric' ? (
          <>
            <label htmlFor="height">Height (cm):</label>
            <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} required /><br />
          </>
        ) : (
          <>
            <label htmlFor="feet">Height:</label>
            <input type="number" id="feet" placeholder="Feet" value={feet} onChange={(e) => setFeet(e.target.value)} required />
            <input type="number" id="inches" placeholder="Inches" value={inches} onChange={(e) => setInches(e.target.value)} required /><br />
          </>
        )}

        {/* Activity Level */}
        <label htmlFor="activityLevel">Activity Level:</label>
        <select id="activityLevel" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
          <option value="1.2">Sedentary (little or no exercise)</option>
          <option value="1.375">Lightly active (light exercise/sports 1-3 days/week)</option>
          <option value="1.55">Moderately active (moderate exercise/sports 3-5 days/week)</option>
          <option value="1.725">Very active (hard exercise/sports 6-7 days a week)</option>
          <option value="1.9">Super active (very hard exercise/sports & a physical job or 2x training)</option>
        </select><br />
        <button type="button" onClick={calculateBMR}>Calculate Daily Calorie Needs</button>
      {/* Additional Goal Button */}
        <div>
         <h2>Primary Goal Selection:</h2>
         <button onClick={() => handleGoalSelection('Lose Weight')}>Lose Weight</button>
         <button onClick={() => handleGoalSelection('Build Muscle')}>Build Muscle</button>
         <button onClick={() => handleGoalSelection('Recomposition')}>Recomposition (Losing fat while gaining muscle)</button>
         <button onClick={() => handleGoalSelection('Maintain Current Weight')}>Maintain Current Weight</button>
         <button onClick={() => handleGoalSelection('Improve Overall Health and Fitness')}>Improve Overall Health and Fitness</button>
        </div>
      </form>
      <p>{result}</p>
    </div>
  );
}

export default BMRCalculator;
