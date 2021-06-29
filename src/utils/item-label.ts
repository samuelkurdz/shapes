/* eslint-disable no-console */
import { ColorInterface, ShapeInterface } from '../mock-data';

const useItemLabel = (colors: ColorInterface[], shapes: ShapeInterface[]) => {
  const selectedColors = colors.filter((color) => color.selected);
  const selectedShapes = shapes.filter((shape) => shape.selected);

  if (selectedColors.length === colors.length && selectedShapes.length === shapes.length) {
    return 'All';
  }
  if (selectedShapes.length === 1 && selectedColors.length === 1) {
    return `${selectedShapes[0].shape} ${selectedColors[0].color}`;
  }
  return 'Not All';
};

export default useItemLabel;
