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
      <>
        <Header />
        <main className="main-content">
          <ExpenseForm />
          <div className="wrapper-table">
            <ExpensesTable />
          </div>
        </main>
      </>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);
