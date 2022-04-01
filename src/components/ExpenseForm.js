import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          Valor
          <input
            type="text"
            id="value-input"
            data-testid="value-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            type="text"
            id="description-input"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="currency-input">
          Moeda
          <select name="" id="currency-input" data-testid="currency-input">
            {currencies.map((currency) => (
              <option key={ currency } value={ currency }>
                {currency}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method-input">
          Método de pagamento
          <select
            name=""
            id="method-input"
            data-testid="method-input"
          >
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Categoria
          <select
            name=""
            id="tag-input"
            data-testid="tag-input"
          >
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({ currencies });

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(ExpenseForm);
