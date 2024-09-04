type TAuthor = {
  name: string,
  birth_year: number | null,
  death_year: number | null
}

export type TBook = {
  id: number,
  title: string,
  authors: TAuthor[],
  translators: string[],
  subjects: string[],
  bookshelves: string[],
  languages: string[],
  copyright: boolean | null,
  media_type: string,
  formats: {
    [format: string]: string
  },
  download_count: number
}

export type TBooks = {
  count: number,
  next: string | null,
  previous: string | null,
  results: TBook[]
}

export type TWeather = {
  current: {
    apparent_temperature: number,
    cloud_cover: number,
    interval: number,
    is_day: number,
    precipitation: number,
    rain: number,
    relative_humidity_2m: number,
    temperature_2m: number,
    time: string;
    wind_speed_10m: number,
  },
  current_units: {
    apparent_temperature: string;
    cloud_cover: string;
    interval: string;
    is_day: string;
    precipitation: string;
    rain: string;
    relative_humidity_2m: string;
    temperature_2m: string;
    time: string;
    wind_speed_10m: string;
  },
  elevation: number,
  generationtime_ms: number,
  latitude: number,
  longitude: number,
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number,
}
