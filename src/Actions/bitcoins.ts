import axios from 'axios';

axios.defaults.headers.common['Content-Type'] =
  'application/json; charset=utf-8';
export const getBitcoins = (): Promise<any> => {
  return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
};
