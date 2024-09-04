import { useEffect, useState } from 'react';
import type { TWeather } from '../../types';
import { getWeather } from '../../services/api';
import './weather.css';
import Loader from '../loader/loader';

function Weather (): JSX.Element {
  const [weather, setWeather] = useState<TWeather>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    getWeather()
        .then((response) => {
            if(response){
                setWeather(response);
            }
        })
        .finally(() => {
          setIsLoading(false);
        })
  }, []);

  return (
    <div className='weather'>
      <p>Краснодар, сегодня</p>
      {weather ? <>
        <p>{weather.current.is_day ? 'день' : 'ночь'}</p>
        <h1>{weather.current.temperature_2m} {weather.current_units.temperature_2m}</h1>
        <p>Ощущается как {weather.current.apparent_temperature} {weather.current_units.apparent_temperature}</p>
        {weather.current.rain ? 'Ожидается дождь' : 'Дождь не ожидается'}
        <p>Ветер {weather.current.wind_speed_10m} {weather.current_units.wind_speed_10m}</p>
        <p>Влажность {weather.current.relative_humidity_2m} {weather.current_units.relative_humidity_2m}</p>
        {weather.current.cloud_cover ? 'Облачно' : 'Ясно'}
      </> : ''}
      {isLoading ? <Loader/> : ''}
    </div>
  )
}

export default Weather;
