// eslint-disable-next-line no-use-before-define
import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import LoginPage from '../pages/login/login';

it('should render', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(LoginPage).length).toEqual(1);
});
