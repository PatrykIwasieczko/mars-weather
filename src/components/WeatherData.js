// React
import React from "react";

// Styles
import "./WeatherData.css";

const WeatherData = () => {
    return (
        <div className="weather-wrapper">
            <div className="date">
                <h2>Day</h2>
                <p>Date</p>
            </div>
            <div className="temperature">
                <h2 className="title">Temperature</h2>
                <p className="reading">
                    Highest:
                    <span>MaxTemp</span>
                    <span>C or F</span>
                </p>
                <p className="reading">
                    Lowest:
                    <span>MinTemp</span>
                    <span>C or F</span>
                </p>
            </div>
            <div>
                <h2>Wind</h2>
                <p>
                    <span>Wind direction</span>
                    <span> kph or mph</span>
                </p>
            </div>
        </div>
    );
};

export default WeatherData;
