import React from 'react';
import PropTypes from 'prop-types';
import { removeCommaAmount } from '../../utils';

const checkRegax = (value) => {
  const regNum = /^[0-9]*$/;

  return regNum.test(value);
};
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

Input.propTypes = {
  toExchangeAmount: PropTypes.string.isRequired,
  onChangeAmount: PropTypes.func.isRequired,
};

export default Input;
