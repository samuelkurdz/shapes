// eslint-disable-next-line no-use-before-define
import React from 'react';
import { connect } from 'react-redux';
import { ColorInterface, ShapeInterface } from '../../mock-data';
import { toggleColor, toggleShape } from '../../state/filter/filter.actions';
import './filters.scss';

interface FiltersProps {
  colors: ColorInterface[];
  shapes: ShapeInterface[];
  // eslint-disable-next-line no-unused-vars
  toggleColorAction: (color: string) => void;
  // eslint-disable-next-line no-unused-vars
  toggleShapeAction: (shape: string) => void;
}

const Filters = (props: FiltersProps) => {
  const { colors, shapes, toggleColorAction, toggleShapeAction } = props;

  const colorToggle = (color: string) => {
    toggleColorAction(color);
  };

  const shapeToggle = (shape: string) => {
    toggleShapeAction(shape);
  };

  return (
    <div>
      <h2>Filters</h2>

      <section className="shapes-container">
        <h4>Shapes</h4>
        <div>
          {shapes.map((shapeObject) => (
            <button
              type="button"
              className={shapeObject.selected ? 'active' : ''}
              key={shapeObject.shape}
              onClick={() => shapeToggle(shapeObject.shape)}
            >
              {shapeObject.shape}
            </button>
          ))}
        </div>
      </section>

      <section className="colors-container">
        <h4>Colors</h4>
        <div>
          {colors.map((colorObject) => (
            <span
              role="button"
              tabIndex={0}
              aria-label="color"
              key={colorObject.color}
              className={`${colorObject.selected ? 'active' : ''} ${colorObject.color}`}
              onKeyDown={() => colorToggle(colorObject.color)}
              onClick={() => colorToggle(colorObject.color)}
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
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleColorAction: (color: string) => dispatch(toggleColor(color)),
  toggleShapeAction: (shape: string) => dispatch(toggleShape(shape)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
