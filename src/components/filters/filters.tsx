// eslint-disable-next-line no-use-before-define
import React from 'react';
import { shapes, colors } from '../../mock-data';
import './filters.scss';

const Filters = () => {
  return (
    <div>
      <h2>Filters</h2>

      <section className="shapes-container">
        <h4>Shapes</h4>
        <div>
          {shapes.map((shape) => (
            <p>{shape}</p>
          ))}
        </div>
      </section>

      <section className="colors-container">
        <h4>Colors</h4>
        <div>
          {colors.map((color) => (
            <p className={color} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Filters;
