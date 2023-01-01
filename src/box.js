import React from "react";
import "./box.css";

export const Box = (props) => {
  return (
    <div className="box">
      {props.weather.cod === 200 ? (
        <div className="celcius">
          <p>
            City - <strong>{props.weather.name}</strong>
          </p>
          <p>
            {" "}
            Temperature -{" "}
            <strong>{(props.weather.main.temp - 273).toFixed(2)} 'C</strong>
          </p>
        </div>
      ) : null}
    </div>
  );
};
