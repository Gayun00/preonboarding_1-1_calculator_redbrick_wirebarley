/* eslint-disable no-console */
import React from 'react';
import { useState, useEffect, useRef } from 'react/cjs/react.development';
import api from '../../api';
import { convertPrice, getRateKey } from '../../utils';
import styles from './Mission1.module.css';
import { countryList1 } from '../../constants';

function Mission1() {
  const [exchangeRates, setExchangeRates] = useState({});
  const [selectedCountry, setSelectedCountry] = useState('KRW');
  const [convertedPrice, setConvertedPrice] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    api(countryList1).then((res) => setExchangeRates(res.data.quotes));
  }, []);

  const selectCountry = (e) => {
    setSelectedCountry(e.target.value);
  };

  const validateRemit = (val) => {
    if (Number(val) < 0) {
      setIsValid(false);
      setValidationMessage('0이상의 값을 넣어주세요');
    } else if (Number(val) > 10000) {
      setIsValid(false);
      setValidationMessage('10000이하의 값을 넣어주세요');
    } else if (Number.isNaN(Number(val))) {
      setIsValid(false);
      setValidationMessage('숫자만 입력해주세요');
    } else {
      setIsValid(true);
    }
  };

  const handleRemit = (e) => {
    e.preventDefault();
    const val = inputRef.current.value;
    validateRemit(val);
    const rate = exchangeRates[`USD${selectedCountry}`];
    const result = convertPrice(String(rate * val));
    setConvertedPrice(result);
  };

  return (
    <div className={styles.container}>
      <h1>환율 계산</h1>
      <div>
        <div className={styles.item}>송금국가: 미국(USD)</div>
        <div>
          <label htmlFor="reception" className={styles.item}>
            수취국가:
            <select name="reception" id="reception" onChange={selectCountry}>
              <option value="KRW">한국(KRW)</option>
              <option value="JPY">일본(JPY)</option>
              <option value="PHP">필리핀(PHP)</option>
            </select>
          </label>
        </div>
        <div>
          <p className={styles.item}>
            환율 :
            {`${convertPrice(String(exchangeRates[getRateKey(selectedCountry)]))} ${selectedCountry}`}
            /USD
          </p>
        </div>
        <form className={styles.item} onSubmit={handleRemit}>
          <label htmlFor="remit">
            송금액:
            <input type="text" id="remit" ref={inputRef} />
            <span>USD</span>
          </label>
          <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
        <p className={styles.item}>{`수취금액은 ${isValid ? convertedPrice : 0} ${selectedCountry}입니다.`}</p>
        <div className={styles.validation}>
          {isValid ? '' : (
            <>
              <p>송금액이 바르지 않습니다.</p>
              <p>{validationMessage}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mission1;
