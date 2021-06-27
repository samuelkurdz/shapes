import { Action } from 'redux';

const initialState = {
  currentUser: null,
};

function userReducer(state = initialState, action: Action<any>) {
  switch (action.type) {
    case 'setUser':
      return {
        ...state,
        currentUser: 'sam',
      };
    default:
      return state;
  }
}

export default userReducer;
