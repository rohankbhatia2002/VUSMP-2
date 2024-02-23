import React from 'react';
import "./Dashboard.css";
import AreaChartComponent from "../Components/AreaChart";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="left-container">
                <div className="box box1">
                  <AreaChartComponent />
                </div>
                <div className="box box2">Box 2</div>
            </div>
            <div className="box box3">Box 3</div>
            <div className="box box4">Box 4</div>
        </div>
      );
};

export default Dashboard;