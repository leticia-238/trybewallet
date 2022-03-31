import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    const { saveUser } = this.props;
    return (
      <form>
        <label htmlFor="email-input">
          email:
          <input
            type="text"
            id="email-input"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="password-input">
          senha:
          <input
            type="password"
            id="password-input"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleInput }
          />
        </label>
        <button
          type="button"
          disabled={ !isValidLogin }
          onClick={ () => saveUser(email) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUser: (email) => dispatch({ type: 'SAVE_USER', email, isLogged: true }),
});

Login.propTypes = {
  saveUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
