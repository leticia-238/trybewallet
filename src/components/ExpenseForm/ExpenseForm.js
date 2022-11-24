import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveExpense } from '../../actions';
import fetchExchange from '../../services/fetchExchangeApi';
import './ExpenseForm.css';

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
      <form className="expense-form">
        <label htmlFor="description-input" className="label">
          Descrição
          <input
            type="text"
            id="description-input"
            name="description"
            className="input"
            value={ description }
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="value-input" className="label value">
          Valor
          <input
            type="number"
            id="value-input"
            name="value"
            className="input"
            value={ value }
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="currency-input" className="label currency">
          Moeda
          <select
            id="currency-input"
            name="currency"
            className="input"
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
        <label htmlFor="method-input" className="label">
          Método de pagamento
          <select
            id="method-input"
            name="method"
            className="input"
            onChange={ this.handleInput }
            value={ method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input" className="label">
          Categoria
          <select
            id="tag-input"
            name="tag"
            className="input"
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
          className="btn"
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
