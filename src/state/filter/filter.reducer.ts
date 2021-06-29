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
    // case 'toggleColor': {
    //   const newColors = state.colors;
    //   if (state.colors.includes(action.payload)) {
    //     const payloadIndex = state.colors.indexOf(action.payload);
    //     newColors.splice(payloadIndex, 1);
    //     return {
    //       ...state,
    //       selectedColors: newColors,
    //     };
    //   }
    //   newColors.push(action.payload);
    //   return {
    //     ...state,
    //     selectedColors: newColors,
    //   };
    // }
    // case 'toggleShape': {
    //   const newShapes = [...state.shapes];
    //   if (state.shapes.includes(action.payload)) {
    //     const payloadIndex = state.shapes.indexOf(action.payload);
    //     newShapes.splice(payloadIndex, 1);
    //     return {
    //       ...state,
    //       selectedShapes: newShapes,
    //     };
    //   }
    //   newShapes.push(action.payload);
    //   return {
    //     ...state,
    //     selectedShapes: newShapes,
    //   };
    // }
    default:
      return state;
  }
};

export default filterReducer;
