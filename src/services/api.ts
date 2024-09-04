import axios, { AxiosError, AxiosResponse } from 'axios';
import { TBooks, TWeather } from '../types';
import { toast } from 'react-toastify';
import { URL } from '../const';

type DetailMessageType = {
  type: string;
  message: string;
}  

export const getBookList = (url: string) => axios.get<TBooks>(url)
  .then((response: AxiosResponse) => {
    return response.data;
  })
  .catch((error: AxiosError<DetailMessageType>) => {
    toast.warn(error.message)
  });

export const getWeather = () => axios.get<TWeather>(URL.Weather)
  .then((response: AxiosResponse) => {
    return response.data;
  })
  .catch((error: AxiosError<DetailMessageType>) => {
    toast.warn(error.message)
  });   