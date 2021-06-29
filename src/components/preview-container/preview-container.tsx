// eslint-disable-next-line no-use-before-define
import React from 'react';
import './preview-container.scss';
import { connect } from 'react-redux';
import { ColorInterface, ShapeInterface } from '../../mock-data';

interface FiltersProps {
  colors: ColorInterface[];
  shapes: ShapeInterface[];
}

const PreviewContainer = (props: FiltersProps) => {
  const { colors, shapes } = props;
  return (
    <div className="preview-container">
      <h2>All Items</h2>

      <section className="items">
        {shapes.map((shapeObject) =>
          shapeObject.selected
            ? colors.map((colorObject) =>
                colorObject.selected ? (
                  <div key={`${shapeObject.shape} ${colorObject.color}`}>
                    <div className={`${shapeObject.shape} ${colorObject.color} item`} />
                  </div>
                ) : null,
              )
            : null,
        )}
      </section>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  colors: state.filter.colors,
  shapes: state.filter.shapes,
});

export default connect(mapStateToProps)(PreviewContainer);
