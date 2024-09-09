import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  const navigate = useNavigate(); // useNavigate hook to navigate

  const handleWeatherCheck = () => {
    navigate("/weather"); // Navigate to the weather page on button click
  };
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/Pranay1903')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Follwers:{data.followers}
      <img src={data.avatar_url} alt="git avtar" width="300"></img>
      {/* Button to navigate to the weather page */}
      <button 
        onClick={handleWeatherCheck}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go for Weather Check
      </button>
    </div>
  );
}

//we can above same with loader in main.jsx

export default Github;

// Loader function is used to fetch data before rendering the component
// allows preloading of data, so we avoid loading states

export const githubInfoLoader = async () => {
  const Response = await fetch("https://api.github.com/users/Pranay1903");
  return Response.json();
};
