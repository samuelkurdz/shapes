// eslint-disable-next-line no-use-before-define
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import LoginPage from '../pages/login/login';
import App from '../components/App';
import store from '../state/store';
// import HomePage from '../pages/home/home';
// import Header from '../components/header/header';

it('should render', () => {
  const wrapped = mount(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(wrapped.find(LoginPage).length).toEqual(1);
  // expect(wrapped.find(HomePage).length).toEqual(1);
  // expect(wrapped.find(Header).length).toEqual(1);
  wrapped.unmount();
});
