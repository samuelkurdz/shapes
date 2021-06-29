/* eslint-disable no-console */
import { Reducer } from 'redux';
import { ColorInterface, newColorData, newShapeData, ShapeInterface } from '../../mock-data';

interface FilterStateInterface {
  colors: ColorInterface[];
  shapes: ShapeInterface[];
}

const initialState: FilterStateInterface = {
  colors: newColorData,
  shapes: newShapeData,
};

const filterReducer: Reducer<FilterStateInterface> = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleColor': {
      const numberOfPreviouslySelecteds = state.colors.filter((color) => color.selected).length;
      if (numberOfPreviouslySelecteds === 1) {
        const currentColors = [...state.colors];
        currentColors.forEach((color) => {
          // eslint-disable-next-line no-param-reassign
          color.selected = true;
        });

        return {
          ...state,
          colors: currentColors,
        };
      }
      const currentColors = [...state.colors];
      const colorCurrentState = currentColors.find((color) => color.color === action.payload);
      if (colorCurrentState) {
        colorCurrentState.selected = !colorCurrentState.selected;
        return {
          ...state,
          colors: currentColors,
        };
      }
      return {
        ...state,
      };
    }
    case 'toggleShape': {
      const currentShapes = [...state.shapes];
      const shapeCurrentState = currentShapes.find((shape) => shape.shape === action.payload);
      if (shapeCurrentState) {
        shapeCurrentState.selected = !shapeCurrentState?.selected;
        return {
          ...state,
          shapes: currentShapes,
        };
      }
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default filterReducer;
