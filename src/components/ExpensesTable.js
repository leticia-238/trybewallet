import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import formatToCash from '../helpers/formatToCash';

class ExpensesTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses
            .map(({ currency, id, description, tag, method, value, exchangeRates }) => {
              const { ask, name } = exchangeRates[currency];
              return (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ formatToCash(value) }</td>
                  <td>{name}</td>
                  <td>{ parseFloat(ask).toFixed(2) }</td>
                  <td>
                    {
                      formatToCash(parseFloat(value) * parseFloat(ask))
                    }
                  </td>
                  <td>Real</td>
                  <td>Editar/Excluir</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ wallet: { expenses } }) => ({ expenses });

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(ExpensesTable);
