const SAVE_USER = 'SAVE_USER';

const REQUEST_DATA_CURRENCIES = 'REQUEST_DATA_CURRENCIES';
const RECEIVE_DATA_CURRENCIES = 'RECEIVE_DATA_CURRENCIES';

export const saveUser = (email) => ({
  type: SAVE_USER,
  email,
});

export const requestDataCurrencies = () => ({
  type: REQUEST_DATA_CURRENCIES,
});

export const receiveDataCurrencies = (data) => ({
  type: RECEIVE_DATA_CURRENCIES,
  currencies: Object.keys(data).filter((currencie) => currencie !== 'USDT'),
});

export { SAVE_USER, REQUEST_DATA_CURRENCIES, RECEIVE_DATA_CURRENCIES };
