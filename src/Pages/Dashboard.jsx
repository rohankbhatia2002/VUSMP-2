import React from 'react';
import "./Dashboard.css";
import AreaChartComponent from "../Components/AreaChart";
import MacroNutrientPieChart from "../Components/MacronutrientPieChart";
import StackedBarChartComponent from "../Components/MacroStackedBarChart";
import DailyCaloricIntakeChart from '../Components/DailyCaloricIntakeChart';
import ProgressBar from '../Components/CaloricIntakeProgressBar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="left-container">
                <div className="box box1">
                  <MacroNutrientPieChart />
                </div>
                <div className="box box2">
                  <StackedBarChartComponent />
                  
                </div>
            </div>
            <div className="box box3">
              <ProgressBar />
              <h2 style={{ textAlign: 'center', margin: '10px 0' }}>Food Journal</h2>
            </div>
            <div className="right-container">
                <div className="box box4">
                  <DailyCaloricIntakeChart />
                </div>
                <div className="box box5">
                  <AreaChartComponent />
                </div>
            </div>
        </div>
      );
};

export default Dashboard;