/* eslint-disable no-console */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { connect } from 'react-redux';
import { toggleColor, toggleShape } from '../../state/filter/filter.actions';
import './filters.scss';

interface FiltersProps {
  colors: string[];
  selectedColors: string[];
  shapes: string[];
  selectedShapes: string[];
  // eslint-disable-next-line no-unused-vars
  toggleColorAction: (color: string) => void;
  // eslint-disable-next-line no-unused-vars
  toggleShapeAction: (shape: string) => void;
}

const Filters = (props: FiltersProps) => {
  const { colors, shapes, selectedShapes, selectedColors, toggleColorAction, toggleShapeAction } = props;

  const colorToggle = (color: string) => {
    toggleColorAction(color);
  };

  const shapeToggle = (shape: string) => {
    toggleShapeAction(shape);
    console.log(shapes);
    console.log(selectedShapes);
  };

  return (
    <div>
      <h2>Filters</h2>

      <section className="shapes-container">
        <h4>Shapes</h4>
        <div>
          {shapes.map((shape) => (
            <button
              type="button"
              className={selectedShapes.includes(shape) ? 'active' : ''}
              key={shape}
              onClick={() => shapeToggle(shape)}
            >
              {shape}
            </button>
          ))}
        </div>
      </section>

      <section className="colors-container">
        <h4>Colors</h4>
        <div>
          {colors.map((color) => (
            <span
              role="button"
              tabIndex={0}
              aria-label="color"
              key={color}
              className={`${selectedColors.includes(color) ? 'active' : ''} ${color}`}
              onKeyDown={() => colorToggle(color)}
              onClick={() => colorToggle(color)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  colors: state.filter.colors,
  shapes: state.filter.shapes,
  selectedColors: state.filter.selectedColors,
  selectedShapes: state.filter.selectedShapes,
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleColorAction: (color: string) => dispatch(toggleColor(color)),
  toggleShapeAction: (shape: string) => dispatch(toggleShape(shape)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
