import { Reducer } from 'redux';
import { colors, shapes } from '../../mock-data';

interface FilterStateInterface {
  colors: string[];
  shapes: string[];
}

const initialState: FilterStateInterface = {
  colors,
  shapes,
};

const filterReducer: Reducer<FilterStateInterface> = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleColor': {
      const newColors = state.colors;
      if (state.colors.includes(action.payload)) {
        newColors.pop();
        return {
          ...state,
          colors: newColors,
        };
      }
      newColors.push(action.payload);
      return {
        ...state,
        colors: newColors,
      };
    }
    case 'toggleShape': {
      const newShapes = state.shapes;
      if (state.colors.includes(action.payload)) {
        newShapes.pop();
        return {
          ...state,
          shapes: newShapes,
        };
      }
      newShapes.push(action.payload);
      return {
        ...state,
        shapes: newShapes,
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
