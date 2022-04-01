import { SAVE_USER } from '../actions';

const INITIAL_STATE = {
  email: '',
  isLogged: false,
};

const user = (state = INITIAL_STATE, action) => {
  const { email } = action;
  switch (action.type) {
  case SAVE_USER:
    return { email, isLogged: true };
  default:
    return state;
  }
};

export default user;
