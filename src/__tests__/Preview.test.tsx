// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import Root from '../root';
import PreviewContainer from '../components/preview-container/preview-container';

describe('Filter Component', () => {
  let wrapped: ReactWrapper<React.Component<{}>>;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <PreviewContainer />
      </Root>,
    );
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
});
