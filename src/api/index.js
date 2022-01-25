const { default: axios } = require('axios');

const getExchangeRate = (countries) => {
  const params = countries.length ? `&currencies=${countries.join()}` : '';
  return axios.get(`http://api.currencylayer.com/live?access_key=${process.env.REACT_APP_API_KEY}${params}`);
};

export default getExchangeRate;
