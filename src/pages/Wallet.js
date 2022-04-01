import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import fetchExchange from '../services/fetchExchangeApi';
import ExpenseForm from '../components/ExpenseForm';

class Wallet extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchExchange());
  }

  render() {
    return (
      <>
        <Header />
        <ExpenseForm />
      </>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);
