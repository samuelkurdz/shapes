// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';

export default (props: any) => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};
