import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import fetchExchange from '../../services/fetchExchangeApi';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import ExpensesTable from '../../components/ExpensesTable/ExpensesTable';
import './Wallet.css';

class Wallet extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchExchange());
  }

  render() {
    return (
      <div className="wallet-page">
        <Header />
        <ExpenseForm />
        <ExpensesTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);
