// React
import React from "react";

// Styles
import "./WeatherData.css";

// Utils
import { formatTemperature, formatWindSpeed } from "../utils";

const WeatherData = ({ data, isMetric }) => {
    const {
        dayKey,
        date,
        minTemp,
        maxTemp,
        pressure,
        windSpeed,
        windDirectionDegrees,
    } = data;

    const windDirectionStyles = {
        transform: `translateY(-50%) rotate(${windDirectionDegrees}deg)`,
    };
    return (
        <div className="weather-wrapper">
            <div className="date">
                <h2>{dayKey}</h2>
                <p>{date}</p>
            </div>
            <div className="temperature">
                <h2 className="title">Temperature</h2>
                <p className="reading">
                    Highest: <span>{formatTemperature(maxTemp, isMetric)}</span>
                    <span>{isMetric ? " C" : " F"}</span>
                </p>
                <p className="reading">
                    Lowest: <span>{formatTemperature(minTemp, isMetric)}</span>
                    <span>{isMetric ? " C" : " F"}</span>
                </p>
            </div>
            <div>
                <h2 className="title">Pressure</h2>
                <p className="reading">
                    <span>{pressure} Pa</span>
                </p>
            </div>
            <div>
                <h2 className="title">Wind</h2>
                <p className="reading">
                    <span>{formatWindSpeed(windSpeed, isMetric)}</span>
                    <span>{isMetric ? " kph" : " mph"}</span>
                </p>
                <div className="wind__direction">
                    <div
                        className="wind__arrow"
                        style={windDirectionStyles}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default WeatherData;
