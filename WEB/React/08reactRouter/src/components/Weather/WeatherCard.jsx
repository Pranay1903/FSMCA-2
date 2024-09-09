import React from "react";

function WeatherCard({ city, temperature, description, icon }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-6">
      <div className="bg-blue-400 p-6 text-white text-center">
        <h2 className="text-3xl font-semibold mb-2">{city}</h2>
        <img 
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
          alt="weather-icon" 
          className="w-20 h-20 mx-auto" 
        />
        <p className="text-6xl font-bold">{temperature}°C</p>
        <p className="text-xl mt-2">{description}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
