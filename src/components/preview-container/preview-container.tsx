// eslint-disable-next-line no-use-before-define
import React from 'react';
import './preview-container.scss';

import { newColorData, newShapeData } from '../../mock-data';

const PreviewContainer = () => {
  return (
    <div className="preview-container">
      <h2>All Items</h2>

      <section className="items">
        {newShapeData.map((shapeObject) =>
          newColorData.map((colorObject) => (
            <div key={`${shapeObject.shape} ${colorObject.color}`}>
              <div className={`${shapeObject.shape} ${colorObject.color} item`} />
            </div>
          )),
        )}
      </section>
    </div>
  );
};

export default PreviewContainer;
