// eslint-disable-next-line no-use-before-define
import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import LoginPage from '../pages/login/login';
import App from '../components/App';

it('should render', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(LoginPage).length).toEqual(1);
});
