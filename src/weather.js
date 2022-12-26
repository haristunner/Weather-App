import React, { useState } from "react";
import "./weather.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

export const Weather = () => {
  const [input, setInput] = useState("");

  const change = (e) => {
    setInput(e.target.value);
  };

  const style = {marginTop: '10px'}

  return (
    <div className="weather">
      <h1>Weather App</h1>
      <div className="container">
        <input type="text" onChange={change} placeholder="Search for a city" required/>
        <Button variant="contained" startIcon={<SearchIcon />} style={style}>
          Search
        </Button>
      </div>
    </div>
  );
};
