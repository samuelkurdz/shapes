import filterReducer from '../state/filter/filter.reducer';
import { newColorData, newShapeData } from '../mock-data';
import useItemLabel from '../utils/item-label';

describe('filterReducer Tests', () => {
  const initialState = {
    colors: newColorData,
    shapes: newShapeData,
  };

  // const loggedInState = {
  //   currentUser: 'sambayo',
  //   isLoggedIn: true,
  // };

  const loginAction = {
    type: 'toggleColor',
    payload: 'yellow',
  };
  // const logoutAction = {
  //   type: 'removeUser',
  // };

  it('Returns All', () => {
    const newFilterState = filterReducer(initialState, loginAction);
    expect(useItemLabel(newFilterState.colors, newFilterState.shapes)).toEqual('Multiple');
  });
});
