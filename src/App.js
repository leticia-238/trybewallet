import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './pages/Login/Login';
import Wallet from './pages/Wallet/Wallet';

const BASE_PATH = '/wallet';

function App(props) {
  const { isLogged } = props;
  return (
    <Switch>
      <Route exact path={ BASE_PATH }>
        {isLogged
          ? <Redirect to={ `${BASE_PATH}/carteira` } />
          : <Login />}
      </Route>
      <Route exact path={ `${BASE_PATH}/carteira` }>
        <Wallet />
      </Route>
    </Switch>
  );
}

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(App);
