import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App(props) {
  const { isLogged } = props;
  return (
    <Switch>
      <Route exact path="/">
        {isLogged
          ? <Redirect to="/carteira" />
          : <Login />}
      </Route>
      <Route exact path="/carteira">
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
