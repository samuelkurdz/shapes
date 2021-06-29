// eslint-disable-next-line no-use-before-define
import React from 'react';
import './preview-container.scss';

import { shapes, colors } from '../../mock-data';

const PreviewContainer = () => {
  return (
    <div className="preview-container">
      <h2>All Items</h2>

      <section className="items">
        {shapes.map((shape) =>
          colors.map((color) => (
            <div>
              <div className={`${shape} ${color} item`} />
            </div>
          )),
        )}
      </section>
    </div>
  );
};

export default PreviewContainer;
