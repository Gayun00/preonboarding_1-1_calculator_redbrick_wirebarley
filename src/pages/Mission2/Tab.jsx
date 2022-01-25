/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { countryList2, monthNames } from '../../constants';
import {
  convertExchangeRate,
  getRateKey,
  removeCommaAmount,
} from '../../utils';

const buttonStyle = (country, selectedReceivingCountry) => (country === selectedReceivingCountry
  ? { backgroundColor: 'black', color: 'white' }
  : null);

function Tab({
  toExchangeAmount,
  selectedSendingCountry,
  selectedReceivingCountry,
  onSelectReceivingCountry,
  exchangeData,
}) {
  const { timestamp: date, quotes: rateList } = exchangeData;
  const filteredCountryList = countryList2.filter(
    (country) => country !== selectedSendingCountry,
  );

  const getRemittanceAmount = (() => {
    const sendingRate = rateList[getRateKey(selectedSendingCountry)];
    const receivingRate = rateList[getRateKey(selectedReceivingCountry)];
    const exchangedRate = convertExchangeRate({ sendingRate, receivingRate });

    const { numberAmount } = removeCommaAmount(toExchangeAmount);
    const convetedAmount = numberAmount.toFixed(2);
    const remittanceAmount = convetedAmount * exchangedRate;

    return Number(remittanceAmount.toFixed(2)).toLocaleString();
  })();

  const getExchangeDate = (() => {
    const time = new Date(date * 1000);
    const getDateTime = time.getDate() + 1;

    const year = time.getFullYear();
    const month = time.getMonth();
    const day = getDateTime > 10 ? `${getDateTime}` : `0${getDateTime}`;

    const exchangeDate = `${year}-${monthNames[month]}-${day}`;

    return exchangeDate;
  })();

  return (
    <div>
      {filteredCountryList.map((country) => (
        <button
          type="button"
          key={country}
          name={country}
          onClick={onSelectReceivingCountry}
          style={buttonStyle(country, selectedReceivingCountry)}
        >
          {country}
        </button>
      ))}
      <h2>{`${selectedReceivingCountry} ${getRemittanceAmount}`}</h2>
      <div>기준일: </div>
      <div>{getExchangeDate}</div>
    </div>
  );
}

Tab.propTypes = {
  toExchangeAmount: PropTypes.string.isRequired,
  selectedSendingCountry: PropTypes.string.isRequired,
  selectedReceivingCountry: PropTypes.string.isRequired,
  onSelectReceivingCountry: PropTypes.func.isRequired,
  exchangeData: PropTypes.object.isRequired,
};

export default Tab;
