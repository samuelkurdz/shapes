// eslint-disable-next-line no-use-before-define
import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import LoginPage from '../pages/login/login';
import App from '../components/App';
import Root from '../root';
import HomePage from '../pages/home/home';
import Header from '../components/header/header';

describe('Before User logs in', () => {
  let wrapped: ReactWrapper<React.Component<{}>>;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <App />
      </Root>,
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('Login page is visible', () => {
    expect(wrapped.find(LoginPage).length).toEqual(1);
  });

  it('Header is not displayed', () => {
    expect(wrapped.find(Header).length).toEqual(0);
  });

  it('Homepage is not displayed', () => {
    expect(wrapped.find(HomePage).length).toEqual(0);
  });
});
