import axios from 'axios';


export const apiGet = (url, additionalParams) =>
  axios({
    method: 'get',
    url,
    ...additionalParams,
  })