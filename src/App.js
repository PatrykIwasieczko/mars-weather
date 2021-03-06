// React
import React, { useState, useEffect } from "react";

// Components
import WeatherData from "./components/WeatherData";
import Informations from "./components/Informations";

// Styles
import {
    GlobalStyle,
    AppWrapper,
    MarsWeather,
    InformationsWrapper,
} from "./App.styles";

// Utils
import axios from "axios";
import { API_URL } from "./API";
import ToggleUnits from "./components/ToggleUnits";
import { PreviousWeather } from "./components/PreviousWeather";

// Img
import BGImage from "./img/mars.jpg";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState([]);
    const [selectedDay, setSelectedDay] = useState();
    const [isMetric, setIsMetric] = useState(true);
    const [previous, setPrevious] = useState(false);

    useEffect(() => {
        getWeatherData();
    }, []);

    const getWeatherData = async () => {
        const data = await axios.get(API_URL);
        const marsWeather = data.data.sol_keys.map((key) => {
            return {
                dayKey: key,
                maxTemp: data.data[key].AT?.mx || "No data",
                minTemp: data.data[key].AT?.mn || "No data",
                pressure: data.data[key].PRE?.av,
                windSpeed: Math.round(data.data[key].HWS?.av || 0),
                windDirectionDegrees:
                    data.data[key].WD?.most_common?.compass_degrees,
                date: new Date(data.data[key].First_UTC).toLocaleDateString(
                    undefined,
                    {
                        day: "numeric",
                        month: "long",
                    }
                ),
            };
        });
        setWeather(marsWeather);
        setSelectedDay(marsWeather.length - 1);
        setLoading(false);
    };

    return (
        <>
            <GlobalStyle bgImage={BGImage} />
            <AppWrapper>
                <MarsWeather>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <h1 className="main-title">
                                Latest weather at Elysium Plantitia
                            </h1>
                            <WeatherData
                                data={weather[selectedDay]}
                                isMetric={isMetric}
                            />
                            <InformationsWrapper>
                                <Informations />
                                <ToggleUnits
                                    isMetric={isMetric}
                                    setIsMetric={setIsMetric}
                                />
                            </InformationsWrapper>
                        </>
                    )}
                </MarsWeather>
                <PreviousWeather
                    weather={weather}
                    previous={previous}
                    setPrevious={setPrevious}
                    setSelectedDay={setSelectedDay}
                    isMetric={isMetric}
                />
            </AppWrapper>
        </>
    );
};

export default App;
