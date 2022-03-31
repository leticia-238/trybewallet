fetchExchange = () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  return (dispatch) => fetch(url)
    .then((response) => response.json())
    .then((dataCurrencies) => dispatch({
      type: RECEIVE_DATA_CURRENCIES,
      dataCurrencies,
    }));
};

export default fetchExchange;
