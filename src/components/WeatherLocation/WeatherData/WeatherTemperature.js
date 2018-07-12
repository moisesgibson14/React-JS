import React from 'react'
import WeatherIcons from 'react-weathericons';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../../constants/weathers'
import PropTypes from 'prop-types'
import './styles.css'

const stateToIconName = weatherState =>{
    switch(weatherState) {
        case CLOUD:
        return "cloudy"
        case CLOUDY:
        return "cloud"
        case SUN:
        return "day-sunny"
        case RAIN:
        return "rain"
        case SNOW:
        return "snow"
        case WINDY:
        return "windy"
        default:
        return "day-sunny"
        break;
    }
}

const getWeatherIcon  = (weatherState) => {
    return(<WeatherIcons name={stateToIconName(weatherState)} size="2x" />)
}

const WeatherTemperature = ({temperature, weatherState}) =>(
    <div className="weatherTemperatureCont"> 
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} Cº`}</span>
    </div>
)

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature 