import { Helmet } from 'react-helmet-async';
import Weather from '../components/weather/weather';

function WeatherPage (): JSX.Element {
  return (
    <main  className='container'>
      <Helmet>
        <title>Weather</title>
      </Helmet>
      <Weather/>
    </main>     
  )
}

export default WeatherPage;
