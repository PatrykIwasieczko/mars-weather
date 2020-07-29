// React
import React from "react";

// Styles
import {
    Wrapper,
    ToggleButton,
    PreviousDays,
    PreviousDay,
} from "./PreviousWeather.styles";

export const PreviousWeather = ({
    weather,
    previous,
    setPrevious,
    setSelectedDay,
    isMetric,
}) => {
    return (
        <Wrapper previous={previous}>
            <ToggleButton
                htmlFor="weather-toggle"
                onClick={() => setPrevious((prev) => !prev)}
                previous={previous}
            >
                <span>&#8593;</span>
                <span className="sr-only">Show previous weather</span>
            </ToggleButton>
            <h2 className="main-title previous-weather-title">
                Previous 7 days
            </h2>
            <PreviousDays>
                {weather.map((day, index) => (
                    <PreviousDay key={day.dayKey} previous={previous}>
                        <h3 className="previous-day-sol">
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
                    </PreviousDay>
                ))}
            </PreviousDays>
        </Wrapper>
    );
};
