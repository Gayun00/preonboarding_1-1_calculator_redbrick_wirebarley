/* eslint-disable react/prop-types */
import React from 'react';
import { countryList } from '../../constants';

function DropButton({ selectedSendingCountry, onSelectSendingCountry }) {
  return (
    <select
      name="country"
      onChange={onSelectSendingCountry}
      defaultValue={selectedSendingCountry}
    >
      {countryList.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
}

export default DropButton;
