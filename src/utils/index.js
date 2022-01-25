/* eslint-disable no-console */
const convertPrice = (stringPrice) => {
  const decimal = Number(stringPrice).toFixed(2).replace(/(^\d*[.]\d{3}$) | ([^0-9.]) |(^\d*[.]{2})/, '');
  const formatted = decimal.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return formatted;
};

export default convertPrice;
