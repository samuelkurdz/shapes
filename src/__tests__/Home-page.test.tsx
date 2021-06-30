// eslint-disable-next-line no-use-before-define
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import HomePage from '../pages/home/home';
import Root from '../root';

describe('User Login Process', () => {
  let homePageWrapper: ReactWrapper<React.Component<{}>>;

  beforeEach(() => {
    homePageWrapper = mount(
      <Root>
        <HomePage />
      </Root>,
    );
  });

  afterEach(() => {
    homePageWrapper.unmount();
  });

  it('HomePage has filters and preview-container components', () => {
    expect(homePageWrapper.find('Filters').length).toEqual(1);
    expect(homePageWrapper.find('PreviewContainer').length).toEqual(1);
  });
});
