export enum AppRoute {
    Main = '/',
    Feed = '/feed',
    Weather = '/weather',
  }

  export const COUNT_VISIBLE_CARDS = 10;

  export const URL = {
    StartPage: 'https://gutendex.com/books?sort=popular',
    Weather: 'https://api.open-meteo.com/v1/forecast?latitude=45.0448&longitude=38.976&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,cloud_cover,wind_speed_10m&timezone=Europe%2FMoscow&forecast_days=1'
  } as const;

  