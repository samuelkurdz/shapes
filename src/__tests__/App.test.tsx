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

  it('Login page is in dispplay', () => {
    expect(wrapped.find(LoginPage).length).toEqual(1);
  });

  it('Header is not displayed', () => {
    expect(wrapped.find(Header).length).toEqual(0);
  });

  it('Homepage is not displayed', () => {
    expect(wrapped.find(HomePage).length).toEqual(0);
  });

  it('App Page should have props of isUserLoggedIn with value of false', () => {
    expect(wrapped.find('App').prop('isUserLoggedIn')).toEqual(false);
  });
});

describe('User Login Process', () => {
  let wrapped: ReactWrapper<React.Component<{}>>;
  let loginWrapper: ReactWrapper<React.Component<{}>>;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <App />
      </Root>,
    );

    loginWrapper = mount(
      <Root>
        <LoginPage />
      </Root>,
    );
  });

  afterEach(() => {
    wrapped.unmount();
    loginWrapper.unmount();
  });

  it('App Page props of isUserLoggedIn with value of true after login form is submitted', () => {
    loginWrapper.find('form').simulate('submit');
    // loginWrapper.update();
    wrapped.update();
    expect(wrapped.find('App').prop('isUserLoggedIn')).toEqual(true);
  });

  it('Homepage and header displayed after login', () => {
    loginWrapper.find('form').simulate('submit');
    // loginWrapper.update();
    wrapped.update();
    expect(wrapped.find(HomePage).length).toEqual(1);
    expect(wrapped.find(Header).length).toEqual(1);
  });

  it('Login is not displayed after login', () => {
    loginWrapper.find('form').simulate('submit');
    // loginWrapper.update();
    wrapped.update();
    expect(wrapped.find(LoginPage).length).toEqual(0);
  });
});
