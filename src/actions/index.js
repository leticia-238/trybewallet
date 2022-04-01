const SAVE_USER = 'SAVE_USER';

const REQUEST_DATA_CURRENCIES = 'REQUEST_DATA_CURRENCIES';
const RECEIVE_DATA_CURRENCIES = 'RECEIVE_DATA_CURRENCIES';

const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const saveUser = (email) => ({
  type: SAVE_USER,
  email,
});

export const requestDataCurrencies = () => ({
  type: REQUEST_DATA_CURRENCIES,
});

export const receiveDataCurrencies = (data) => ({
  type: RECEIVE_DATA_CURRENCIES,
  currencies: Object.keys(data).filter((currency) => currency !== 'USDT'),
  currenciesData: data,
});

export const saveExpense = (expense) => ({
  type: SAVE_EXPENSE,
  expense,
});

export { SAVE_USER, REQUEST_DATA_CURRENCIES, RECEIVE_DATA_CURRENCIES, SAVE_EXPENSE };
