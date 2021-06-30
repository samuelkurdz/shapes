// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ReactWrapper, mount } from 'enzyme';
import Root from '../root';
import LoginPage from '../pages/login/login';

describe('Login Page Tests', () => {
  let loginWrapper: ReactWrapper<React.Component<{}>>;

  beforeEach(() => {
    loginWrapper = mount(
      <Root>
        <LoginPage />
      </Root>,
    );
  });

  afterEach(() => {
    loginWrapper.unmount();
  });

  it('Login page should have two inputs and one button', () => {
    expect(loginWrapper.find('input').length).toEqual(2);
    expect(loginWrapper.find('button').length).toEqual(1);
  });

  it('Login page should have username and password inputs already populated', () => {
    expect(loginWrapper.find('#username').prop('value')).toEqual('sambayo');
    expect(loginWrapper.find('#password').prop('value')).toEqual('password');
  });

  // it('Login page should have username and password inputs which are responsive to changes', () => {
  //   loginWrapper.find('#username').simulate('change', {
  //     target: { value: '' },
  //   });
  //   loginWrapper.update();
  //   loginWrapper.find('#password').simulate('change', {
  //     target: { value: '' },
  //   });
  //   loginWrapper.update();
  //   expect(loginWrapper.find('#username').prop('value')).toEqual('');
  //   expect(loginWrapper.find('#password').prop('value')).toEqual('password');
  // });
});
