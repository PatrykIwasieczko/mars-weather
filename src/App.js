// React
import React, { useState } from "react";

// Components
import WeatherData from "./components/WeatherData";

// Styles
import "./App.css";

const App = () => {
    const [loading, setLoading] = useState(false);
    return (
        <div className="App">
            <div className="wrapper">
                <div className="mars-weather">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <h1>Latest weather at Elysium Plantitia</h1>
                            <WeatherData />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
