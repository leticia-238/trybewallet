const INITIAL_STATE = {
  email: '',
  isLogged: false,
};

const SAVE_USER = 'SAVE_USER';

const user = (state = INITIAL_STATE, action) => {
  const { email, isLogged } = action;
  switch (action.type) {
  case SAVE_USER:
    return { email, isLogged };
  default:
    return state;
  }
};

export default user;
