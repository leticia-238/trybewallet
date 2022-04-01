import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from './Logo';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header className="header">
        <Logo />
        <h2 data-testid="email-field" className="email-field">{ email }</h2>
        <div className="header-field">
          <p data-testid="total-field" className="total-field">{0}</p>
          <p data-testid="header-currency-field" className="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email } }) => ({ email });

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
