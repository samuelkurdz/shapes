import { Action } from 'redux';

const initialState = {
  currentUser: null,
};

function userReducer(state = initialState, action: Action) {
  // // eslint-disable-next-line no-console
  // console.log(action);
  switch (action.type) {
    case 'setUser':
      return {
        ...state,
        currentUser: action,
      };
    default:
      return state;
  }
}

export default userReducer;
