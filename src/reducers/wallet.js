import {
  REQUEST_DATA_CURRENCIES,
  RECEIVE_DATA_CURRENCIES,
  SAVE_EXPENSE }
from '../actions';
import formatToCash from '../helpers/formatToCash';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  totalExpenses: '0.00',
  currenciesData: {},
  isFetching: false,
};

const calcTotalExpenses = (total, { value, currency, exchangeRates }) => {
  const exchangeValue = exchangeRates[currency].ask;
  const totalValue = parseFloat(total) + parseFloat(value) * parseFloat(exchangeValue);
  return formatToCash(totalValue);
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
