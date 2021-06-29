/* eslint-disable no-console */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { connect } from 'react-redux';
// import { shapes, colors } from '../../mock-data';
import './filters.scss';

interface FiltersProps {
  colors: string[];
  selectedColors: string[];
  shapes: string[];
  selectedShapes: string[];
}

const Filters = (props: FiltersProps) => {
  const { colors, shapes, selectedShapes, selectedColors } = props;
  return (
    <div>
      <h2>Filters</h2>

      <section className="shapes-container">
        <h4>Shapes</h4>
        <div>
          {shapes.map((shape) => (
            <p className={selectedShapes.includes(shape) ? 'active' : ''} key={shape}>
              {shape}
            </p>
          ))}
        </div>
      </section>

      <section className="colors-container">
        <h4>Colors</h4>
        <div>
          {colors.map((color) => (
            <span className={`${selectedColors.includes(color) ? 'active' : ''} ${color}`} key={color} />
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

export default connect(mapStateToProps)(Filters);
