const convertPrice = (stringPrice) => {
  const decimal = Number(stringPrice).toFixed(2).replace(/(^\d*[.]\d{3}$) | ([^0-9.]) |(^\d*[.]{2})/, '');
  const formatted = decimal.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return formatted;
};

export default convertPrice;

export const convertExchangeRate = (params) => {
  const { sendingRate, receivingRate } = params;

  return receivingRate / sendingRate;
};

export const removeCommaAmount = (strAmount) => {
  const stringAmount = strAmount.replace(/,/g, '');
  const numberAmount = Number(stringAmount);

  return { stringAmount, numberAmount };
};

export const getRateKey = (selectedCountry) => `USD${selectedCountry}`;
