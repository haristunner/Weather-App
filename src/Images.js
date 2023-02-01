import React from 'react'
import "./Images.css"
import { WiCloud, WiRain, WiDayHaze, WiCloudy, WiStormShowers, WiSnow, WiFog } from 'weather-icons-react';

export const Images = (props) => {

    const value = props.image;

    return (
        <div className='image'>
            {value === "haze" ?
                <WiDayHaze size={100} /> : value === "Clouds" ? <WiCloud size={100} /> : value === "Rain" ? <WiRain size={100} /> : value === "Haze" ? <WiDayHaze size={100} />
                    : value === "Storm" ? <WiStormShowers size={100} /> : value === "Clear" ? <WiCloudy size={100} /> : value === "Snow" ? <WiSnow size={100} /> : value === "Mist" ? <WiFog size={100} /> : null}
        </div>
    )
}
