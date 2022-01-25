import React from 'react';
import { checkRegax, removeCommaAmount } from '../../utils';

// eslint-disable-next-line react/prop-types
function Input({ toExchangeAmount, onChangeAmount }) {
  const handleChange = (e) => {
    const { value } = e.target;
    const { stringAmount, numberAmount } = removeCommaAmount(value);

    if (stringAmount.length > 17) return;
    if (!checkRegax(stringAmount)) return;

    const commaAmount = numberAmount.toLocaleString();

    if (commaAmount === '0') {
      onChangeAmount('');
    } else {
      onChangeAmount(commaAmount);
    }
  };

  return <input onChange={handleChange} value={toExchangeAmount} />;
}

export default Input;
