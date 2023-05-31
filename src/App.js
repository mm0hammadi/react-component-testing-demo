import Axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
// import CityComponent from "./modules/CityComponent";
// import WeatherComponent from "./modules/WeatherInfoComponent";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
export const WeatherIcons = {
  "01d": "/demo-playwright-component-testing/icons/sunny.svg",
  "01n": "/demo-playwright-component-testing/icons/night.svg",
  "02d": "/demo-playwright-component-testing/icons/day.svg",
  "02n": "/demo-playwright-component-testing/icons/cloudy-night.svg",
  "03d": "/demo-playwright-component-testing/icons/cloudy.svg",
  "03n": "/demo-playwright-component-testing/icons/cloudy.svg",
  "04d": "/demo-playwright-component-testing/icons/sunny-beautiful.svg",
  "04n": "/demo-playwright-component-testing/icons/cloudy-night.svg",
  "09d": "/demo-playwright-component-testing/icons/rain.svg",
  "09n": "/demo-playwright-component-testing/icons/rain-night.svg",
  "10d": "/demo-playwright-component-testing/icons/rain.svg",
  "10n": "/demo-playwright-component-testing/icons/rain-night.svg",
  "11d": "/demo-playwright-component-testing/icons/storm.svg",
  "11n": "/demo-playwright-component-testing/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b93276ab1f9da29c04834cd72b09ef5b`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
