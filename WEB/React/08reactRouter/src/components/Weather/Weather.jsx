import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

function Weather() {
  const [city, setCity] = useState("Vadodara"); 
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = "8aafcf20f372ced7c0c6571caa310749"; 
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="text-center mt-8">
      <h1 className="text-2xl font-bold mb-4">Weather Information</h1>

      <select
        value={city}
        onChange={handleCityChange}
        className="p-2 border rounded-md"
      >
        <option value="Vadodara">Vadodara</option>
        <option value="Ahmedabad">Ahmedabad</option>
        <option value="Anand">Anand</option>
        <option value="Surat">Surat</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Pune">Pune</option>
      </select>

      {/* Display weather card if data is available */}
      {weatherData && !error && (
        <WeatherCard
          city={weatherData.name}
          temperature={weatherData.main.temp}
          description={weatherData.weather[0].description}
          icon={weatherData.weather[0].icon}
        />
      )}

      {/* Error handling */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}

export default Weather;
