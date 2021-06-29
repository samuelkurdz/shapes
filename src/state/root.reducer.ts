import { combineReducers } from 'redux';
import filterReducer from './filter/filter.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  filter: filterReducer,
});

export default rootReducer;
