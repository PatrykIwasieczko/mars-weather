// React
import React from "react";

// Styles
import "./WeatherData.css";

const WeatherData = ({ data }) => {
    const {
        dayKey,
        date,
        minTemp,
        maxTemp,
        pressure,
        windSpeed,
        windDirectionDegrees,
    } = data;
    return (
        <div className="weather-wrapper">
            <div className="date">
                <h2>{dayKey}</h2>
                <p>{date}</p>
            </div>
            <div className="temperature">
                <h2 className="title">Temperature</h2>
                <p className="reading">
                    Highest:
                    <span>{maxTemp}</span>
                    <span>C or F</span>
                </p>
                <p className="reading">
                    Lowest:
                    <span>{minTemp}</span>
                    <span>C or F</span>
                </p>
            </div>
            <div>
                <h2>Pressure</h2>
                <p>
                    <span>{pressure} Pa</span>
                </p>
            </div>
            <div>
                <h2>Wind</h2>
                <p>
                    <span>{windDirectionDegrees}</span>
                    <span>{windSpeed} kph or mph</span>
                </p>
            </div>
        </div>
    );
};

export default WeatherData;
