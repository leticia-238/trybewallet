import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from './Logo';

class Header extends Component {
  render() {
    const { email, totalExpenses } = this.props;
    return (
      <header className="header">
        <Logo />
        <h2 data-testid="email-field" className="email-field">{ email }</h2>
        <div className="header-field">
          <p data-testid="total-field" className="total-field">
            {totalExpenses}
          </p>
          <p data-testid="header-currency-field" className="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({
  user: { email },
  wallet: { totalExpenses } }) => ({ email, totalExpenses });

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.string,
};

Header.defaultProps = {
  totalExpenses: '0.00',
};

export default connect(mapStateToProps, null)(Header);
