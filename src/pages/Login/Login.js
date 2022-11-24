import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveUser } from '../../actions';
import Logo from '../../components/Logo/Logo';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isValidLogin: false,
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    this.validLoginForm();
  }

  validLoginForm = () => {
    this.setState(({ email, password }) => {
      const emailRegex = /\S+@\S+\.com/;
      const minChar = 6;
      const isValidLogin = emailRegex.test(email) && password.length >= minChar;
      return { isValidLogin };
    });
  }

  render() {
    const { email, password, isValidLogin } = this.state;
    const { dispatch } = this.props;
    return (
      <form className="login-form">
        <Logo />
        <label htmlFor="email-input" className="label">
          email
          <input
            type="text"
            id="email-input"
            className="input"
            name="email"
            value={ email }
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="password-input" className="label">
          senha
          <input
            type="password"
            id="password-input"
            className="input"
            name="password"
            value={ password }
            onChange={ this.handleInput }
          />
        </label>
        <button
          type="button"
          className="btn"
          disabled={ !isValidLogin }
          onClick={ () => dispatch(saveUser(email)) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
