// React
import React from "react";

// Styles
import "./PreviousWeather.css";

export const PreviousWeather = ({
    weather,
    previous,
    setPrevious,
    setSelectedDay,
    isMetric,
}) => {
    const transformStyles = {
        transform: `${previous ? "translateY(0)" : "translateY(60%)"}`,
    };

    const previousDayAnimation = {
        animation: `${previous ? "slideUpIn 750 ms forwards" : null}`,
    };

    const transformButtonStyles = {
        transform: `${
            previous ? "rotate(180deg) translateY(-6px)" : "rotate(0)"
        }`,
    };

    const previousWeatherTitleStyles = {
        textAlign: `${previous ? "left" : "center"}`,
    };

    return (
        <div className="previous-wrapper" style={transformStyles}>
            <button
                className="toggle-button"
                htmlFor="weather-toggle"
                onClick={() => setPrevious((prev) => !prev)}
                previous={previous}
            >
                <span style={transformButtonStyles}>&#8593;</span>
                <span className="sr-only">Show previous weather</span>
            </button>
            <h2 className="main-title" style={previousWeatherTitleStyles}>
                Previous 7 days
            </h2>
            <div className="previous-days">
                {weather.map((day, index) => (
                    <div
                        key={day.dayKey}
                        className="previous-day"
                        style={previousDayAnimation}
                    >
                        <h3 className="previous-day__sol">
                            <span>{day.dayKey}</span>
                        </h3>
                        <p className="previous-day-date">{day.date}</p>
                        <p className="previous-day-temp">
                            Highest:
                            <span>{day.maxTemp}</span>
                            <span>{isMetric ? " C" : " F"}</span>
                        </p>
                        <p className="previous-day-temp">
                            Lowest:
                            <span>{day.minTemp}</span>
                            <span>{isMetric ? " C" : " F"}</span>
                        </p>
                        <button
                            className="previous-day-more-info"
                            onClick={() => setSelectedDay(index)}
                        >
                            More info
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
