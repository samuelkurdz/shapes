// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import './index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
// import store from './state/store';
import Root from './root';

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <Root>
    <App />
  </Root>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
