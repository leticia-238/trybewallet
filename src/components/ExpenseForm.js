import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveExpense } from '../actions';
import fetchExchange from '../services/fetchExchangeApi';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.defaultState = {
      value: '0',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.state = {
      ...this.defaultState,
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, dispatch } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Valor
          <input
            type="number"
            id="value-input"
            name="value"
            data-testid="value-input"
            value={ value }
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            type="text"
            id="description-input"
            name="description"
            data-testid="description-input"
            value={ description }
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="currency-input">
          Moeda
          <select
            id="currency-input"
            name="currency"
            data-testid="currency-input"
            value={ currency }
            onChange={ this.handleInput }
          >
            {currencies.map((currencyName) => (
              <option key={ currencyName } value={ currencyName }>
                {currencyName}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento
          <select
            id="method-input"
            name="method"
            data-testid="method-input"
            onChange={ this.handleInput }
            value={ method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria
          <select
            id="tag-input"
            name="tag"
            data-testid="tag-input"
            onChange={ this.handleInput }
            value={ tag }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => {
            dispatch(saveExpense(this.state));
            dispatch(fetchExchange());
            this.setState({ ...this.defaultState });
          } }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({ currencies });

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(ExpenseForm);
