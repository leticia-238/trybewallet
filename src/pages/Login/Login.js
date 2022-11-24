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
        <label htmlFor="email-input" className="label form-label">
          email
          <input
            type="text"
            id="email-input"
            className="input form-input"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="password-input" className="label form-label">
          senha
          <input
            type="password"
            id="password-input"
            className="input form-input"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleInput }
          />
        </label>
        <button
          type="button"
          className="btn btn-form"
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
