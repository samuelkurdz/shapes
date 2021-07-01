// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import Filters from '../components/filters/filters';
import Root from '../root';

describe('Filter Component', () => {
  let wrapped: ReactWrapper<React.Component<{}>>;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <Filters />
      </Root>,
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('has Filter Header', () => {
    expect(wrapped.find('h2').length).toEqual(1);
  });

  it('has shapes and colors container class', () => {
    expect(wrapped.find('.shapes-container').length).toEqual(1);
    expect(wrapped.find('.colors-container').length).toEqual(1);
  });

  it('has 5 buttons of shapes', () => {
    expect(wrapped.find('button').length).toEqual(5);
  });

  it('has 6 span of colors', () => {
    expect(wrapped.find('span').length).toEqual(6);
  });
});
