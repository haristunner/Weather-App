import React, { useEffect, useState } from "react";
import "./weather.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import fetch from "node-fetch";

//https://github1s.com/jdretz/rapid-api-react-weather-app-tutorial/blob/HEAD/src/components/Forecast/Forecast.js

export const Weather = () => {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState([]);

  const change = (e) => {
    setInput(e.target.value);
  };

  const getWeather = (e) => {
    e.preventDefault();
    //const fetch = require(fetch);
    //console.log(input)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.REACT_APP_API_KEY}`;
    const options = {
      method: "GET",
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setWeather(json))
      .catch((err) => console.error("error:" + err));
  };

  const style = { marginTop: "10px" };

  return (
    <div className="weather">
      <h1>Weather App</h1>
      <div className="container">
        <input
          type="text"
          onChange={change}
          placeholder="Search for a city"
          required
        />
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          style={style}
          onClick={getWeather}
        >
          Search
        </Button>
        <p>{weather.main.temp-273.15}</p>
      </div>
    </div>
  );
};
