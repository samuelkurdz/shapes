// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import Root from '../root';
import PreviewContainer from '../components/preview-container/preview-container';
import { newColorData, newShapeData } from '../mock-data';
import filterReducer, { FilterStateInterface } from '../state/filter/filter.reducer';
import useItemLabel from '../utils/item-label';

describe('Filter Component', () => {
  let wrapped: ReactWrapper<React.Component<{}>>;
  let intialFilterState: FilterStateInterface;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <PreviewContainer />
      </Root>,
    );

    intialFilterState = {
      colors: newColorData,
      shapes: newShapeData,
    };
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('has header that contains Items', () => {
    expect(wrapped.find('h2').text()).toContain('items');
  });

  it('always has one or more item(s) in display', () => {
    expect(wrapped.find('.item').length).toBeGreaterThan(0);
  });

  it('header is All Items', () => {
    const randomAction = {
      type: 'unaccounted',
      payload: '',
    };
    const newFilterState = filterReducer(intialFilterState, randomAction);
    const headerText = useItemLabel(newFilterState.colors, newFilterState.shapes);
    expect(headerText).toEqual('All');
  });

  it('header is Multiple items after a color has been deselected', () => {
    const toggleColorAction = {
      type: 'toggleColor',
      payload: 'red',
    };
    const newFilterState = filterReducer(intialFilterState, toggleColorAction);
    const headerText = useItemLabel(newFilterState.colors, newFilterState.shapes);
    expect(headerText).toEqual('Multiple');
  });

  it('header is Multiple items after a shape has been deselected', () => {
    const toggleColorAction = {
      type: 'toggleShape',
      payload: 'rectangle',
    };
    const newFilterState = filterReducer(intialFilterState, toggleColorAction);
    const headerText = useItemLabel(newFilterState.colors, newFilterState.shapes);
    expect(headerText).toEqual('Multiple');
  });
});
