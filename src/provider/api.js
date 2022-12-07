import axios from 'axios';

export const quoteAPI = axios.create({
  baseURL: `https://api.kanye.rest`,
});

export const getCoute = axios.get({
  baseURL: `https://api.kanye.rest`
})
