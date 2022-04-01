import { requestDataCurrencies, receiveDataCurrencies } from '../actions';

const fetchExchange = () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    dispatch(requestDataCurrencies());
    const response = await fetch(url);
    const data = await response.json();
    return dispatch(receiveDataCurrencies(data));
  };
};

export default fetchExchange;
