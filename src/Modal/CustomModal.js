import React, { useEffect } from "react";

const WeatherComponent = () => {
  const API_KEY = "28c520d1efcc43c8fa55f4ec8fab27b6";
  const city = "YourCityName"; // Replace with the desired city name

  const fetchData = async () => {
    console.log("entered function");
    try {
      console.log("b4 api call");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Weather Data:", data);
      console.log("meow");
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // This empty dependency array ensures the function is called only once when the component mounts

  return <div>meow</div>;
};

export default WeatherComponent;
