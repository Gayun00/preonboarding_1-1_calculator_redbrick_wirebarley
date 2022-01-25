/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { countryList, monthNames } from '../../constants';
import {
  convertExchangeRate,
  getRateKey,
  removeCommaAmount,
} from '../../utils';

function Tab({
  toExchangeAmount,
  selectedSendingCountry,
  selectedReceivingCountry,
  onSelectReceivingCountry,
  exchangeData,
}) {
  const { timestamp: date, quotes: rateList } = exchangeData;
  const cbfn = (country) => country !== selectedSendingCountry;
  const filteredCountryList = countryList.filter(cbfn);

  const getRemittanceAmount = (() => {
    // 변환 환율 구하기
    const sendingRate = rateList[getRateKey(selectedSendingCountry)];
    const receivingRate = rateList[getRateKey(selectedReceivingCountry)];
    const exchangedRate = convertExchangeRate({ sendingRate, receivingRate });
    // 금액
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

export default Tab;
