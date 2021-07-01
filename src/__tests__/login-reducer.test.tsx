// eslint-disable-next-line no-use-before-define
import userReducer from '../state/user/user.reducer';

describe('Filter Component', () => {
  // let wrapped: ReactWrapper<React.Component<{}>>;

  const initialState = {
    currentUser: undefined,
    isLoggedIn: false,
  };
  const action = {
    type: 'setUser',
    payload: 'sambayo',
  };

  const finalState = {
    currentUser: 'sambayo',
    isLoggedIn: true,
  };

  const newUserState = userReducer(initialState, action);

  it('test user reducer action', () => {
    expect(newUserState).toEqual(finalState);
  });
});
