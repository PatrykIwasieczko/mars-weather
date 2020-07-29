// React
import React from "react";

// Styles
import {
    WeatherWrapper,
    Date,
    Temperature,
    Pressure,
    Wind,
} from "./WeatherData.styles";

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

    return (
        <WeatherWrapper>
            <Date>
                <h2>{dayKey}</h2>
                <p>{date}</p>
            </Date>
            <Temperature>
                <h2 className="section-title">Temperature</h2>
                <p className="reading">
                    Highest: <span>{formatTemperature(maxTemp, isMetric)}</span>
                    <span>{isMetric ? " C" : " F"}</span>
                </p>
                <p className="reading">
                    Lowest: <span>{formatTemperature(minTemp, isMetric)}</span>
                    <span>{isMetric ? " C" : " F"}</span>
                </p>
            </Temperature>
            <Pressure>
                <h2 className="section-title">Pressure</h2>
                <p className="reading">
                    <span>{pressure} Pa</span>
                </p>
            </Pressure>
            <Wind deg={windDirectionDegrees}>
                <h2 className="section-title">Wind</h2>
                <p className="reading">
                    <span>{formatWindSpeed(windSpeed, isMetric)}</span>
                    <span>{isMetric ? " kph" : " mph"}</span>
                </p>
                <div className="wind-direction">
                    <div className="wind-arrow"></div>
                </div>
            </Wind>
        </WeatherWrapper>
    );
};

export default WeatherData;
