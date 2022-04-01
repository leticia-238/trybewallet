import { REQUEST_DATA_CURRENCIES, RECEIVE_DATA_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  const { currencies } = action;
  switch (action.type) {
  case REQUEST_DATA_CURRENCIES:
    return { ...state, isFetching: true };

  case RECEIVE_DATA_CURRENCIES:
    return { ...state, currencies, isFetching: false };

  default:
    return state;
  }
};

export default wallet;
