const convertPrice = (stringPrice) => {
  const decimal = Number(stringPrice).toFixed(2);
  const formatted = Number(decimal).toLocaleString();
  return formatted.toFixed(2);
};

export default convertPrice;
