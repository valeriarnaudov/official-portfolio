import React, { useState } from "react";
import "./weatherApp.css";

const WeatherApp = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState();
    const [error, setError] = useState(null);

    const API_KEY = "f890a389cf44656e586b802d01eb3597";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const api_call = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await api_call.json();
        if (city && data.cod === 200) {
            setWeather(data);
            setError(null);
        } else {
            setError("City not found.");
        }
    };

    return (
        <div className="weather-app">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Get Weather</button>
            </form>
            {error ? (
                <p className="error">{error}</p>
            ) : (
                <div className="weather-info">
                    {weather && (
                        <div>
                            <p>Country: {weather.sys.country}</p>
                            <p>Location: {weather.name}</p>
                            <div>
                                <img
                                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                    alt={weather.weather[0].description}
                                    className="weather-icon"
                                />
                                <p>
                                    {weather.weather[0].description.toUpperCase()}
                                </p>
                                <p>
                                    Temperature: {weather.main.temp}
                                    °C
                                </p>
                            </div>
                            <p>
                                Feels like: {weather.main.feels_like}
                                °C
                            </p>
                            <p>Humidity: {weather.main.humidity} %</p>
                            <p>
                                Wind Speed:{" "}
                                {(Number(weather.wind.speed) * 3.6).toFixed(2)}{" "}
                                km/h
                            </p>
                            <p>Wind Direction: {weather.wind.deg}°</p>
                            <p>Latitude: {weather.coord.lat}</p>
                            <p>Longitude: {weather.coord.lon}</p>
                            <p>
                                Current Time:{" "}
                                {new Date(weather.dt * 1000).toLocaleString()}
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default WeatherApp;
