// React
import React from "react";

// Styles
import "./ToggleUnits.css";

const ToggleUnits = ({ isMetric, setIsMetric }) => {
    const toggleButtonStyles = {
        marginLeft: `${isMetric ? "3px" : "auto"}`,
    };
    return (
        <div className="toggle-units">
            <label htmlFor="cel">°C</label>
            <button
                // dataDotStyles={isMetric ? "3px" : "auto"}
                className={`toggle-units-button ${
                    isMetric ? "ml-3" : "ml-auto"
                }`}
                onClick={() => setIsMetric((prev) => !prev)}
            ></button>
            <label htmlFor="fah">°F</label>
        </div>
    );
};

export default ToggleUnits;
