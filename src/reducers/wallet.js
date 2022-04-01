import {
  REQUEST_DATA_CURRENCIES,
  RECEIVE_DATA_CURRENCIES,
  SAVE_EXPENSE }
from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: 0,
  currenciesData: {},
  isFetching: false,
};

const calcTotalExpenses = (total, { value, currency, exchangeRates }) => {
  const exchangeValue = exchangeRates[currency].ask;
  let totalValue = total + parseFloat(value) * parseFloat(exchangeValue);
  totalValue = `${totalValue}`.match(/[0-9]+\.[0-9]{2}/g);
  return parseFloat(totalValue);
};

const wallet = (state = INITIAL_STATE, action) => {
  const { currencies, currenciesData, expense } = action;

  switch (action.type) {
  case REQUEST_DATA_CURRENCIES:
    return { ...state, isFetching: true };

  case RECEIVE_DATA_CURRENCIES:
    return { ...state, currencies, currenciesData, isFetching: false };

  case SAVE_EXPENSE:
    expense.id = state.expenses.length;
    expense.exchangeRates = state.currenciesData;
    return {
      ...state,
      expenses: [...state.expenses, expense],
      totalExpenses: calcTotalExpenses(state.totalExpenses, expense),
    };

  default:
    return state;
  }
};

export default wallet;
