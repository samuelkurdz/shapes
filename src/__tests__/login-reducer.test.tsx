import userReducer from '../state/user/user.reducer';

describe('UserReducer Tests', () => {
  const noUserState = {
    currentUser: undefined,
    isLoggedIn: false,
  };

  const loggedInState = {
    currentUser: 'sambayo',
    isLoggedIn: true,
  };

  const loginAction = {
    type: 'setUser',
    payload: 'sambayo',
  };
  const logoutAction = {
    type: 'removeUser',
  };

  it('test user login reducer action', () => {
    const newUserState = userReducer(noUserState, loginAction);
    expect(newUserState).toEqual(loggedInState);
  });

  it('test user logout reducer action', () => {
    const newUserState = userReducer(loggedInState, logoutAction);
    expect(newUserState).toEqual(noUserState);
  });
});
