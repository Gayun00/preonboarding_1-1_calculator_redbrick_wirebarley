import React, { useEffect, useState } from 'react';
import Input from './Input';
import getExchangeRate from '../../api';
import DropButton from './DropButton';
import { USD, CAD, countryList } from '../../constants';
import Tab from './Tab';

function Mission2() {
  const [toExchangeAmount, setToExchangeAmount] = useState('');
  const [exchangeData, setExchangeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSendingCountry, setSelectedSendingCountry] = useState(USD);
  const [selectedReceivingCountry, setSelectedReceivingCountry] = useState(CAD);

  useEffect(async () => {
    setIsLoading(true);

    const res = await getExchangeRate(countryList);
    setExchangeData(res.data);

    setIsLoading(false);
  }, [selectedSendingCountry, selectedReceivingCountry]);

  const onChangeAmount = (value) => {
    setToExchangeAmount(value);
  };

  const onSelectSendingCountry = (e) => {
    const { value } = e.target;
    if (value === selectedReceivingCountry) {
      setSelectedReceivingCountry(selectedSendingCountry);
    }
    setSelectedSendingCountry(value);
  };

  const onSelectReceivingCountry = (e) => {
    const { name } = e.target;
    setSelectedReceivingCountry(name);
  };

  if (isLoading) return <div>로딩중..</div>;
  if (!exchangeData?.success) return <div>불러오기 실패...</div>;

  return (
    <div>
      <Input
        toExchangeAmount={toExchangeAmount}
        onChangeAmount={onChangeAmount}
      />
      <DropButton
        selectedSendingCountry={selectedSendingCountry}
        onSelectSendingCountry={onSelectSendingCountry}
      />
      <Tab
        toExchangeAmount={toExchangeAmount}
        selectedSendingCountry={selectedSendingCountry}
        selectedReceivingCountry={selectedReceivingCountry}
        onSelectReceivingCountry={onSelectReceivingCountry}
        exchangeData={exchangeData}
      />
    </div>
  );
}

export default Mission2;
