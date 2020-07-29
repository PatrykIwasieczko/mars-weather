// React
import React from "react";

// Styles
import { Units, ToggleUnitsButton } from "./ToggleUnits.styles";

const ToggleUnits = ({ isMetric, setIsMetric }) => {
    return (
        <Units>
            <label htmlFor="cel">°C</label>
            <ToggleUnitsButton
                isMetric={isMetric}
                onClick={() => setIsMetric((prev) => !prev)}
            ></ToggleUnitsButton>
            <label htmlFor="fah">°F</label>
        </Units>
    );
};

export default ToggleUnits;
