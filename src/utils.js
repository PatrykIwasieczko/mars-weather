export const formatDate = (date) => {
    date.toLocaleDateString(undefined, { day: "numeric", month: "long" });
};

export const formatTemperature = (temperature, isMetric) => {
    let returnTemp = temperature;
    if (!isMetric) {
        returnTemp = (temperature - 32) * (5 / 9);
    }
    return Math.round(returnTemp);
};

export const formatWindSpeed = (speed, isMetric) => {
    let returnSpeed = speed;
    if (!isMetric) {
        returnSpeed = 0.621371192 * returnSpeed;
    }
    return Math.round(returnSpeed);
};
