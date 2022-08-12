import React from "react";
import '../styles/ChartAssit.css';

const ChartAssit = () => {

    return (
      <div className="col s12 l6 chart-container">
        <canvas id="myChart" height={242} />
      </div>
    );
}

export default ChartAssit;