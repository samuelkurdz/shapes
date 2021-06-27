/* eslint-disable no-console */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import HomePage from '../pages/home/home';
import LoginPage from '../pages/login/login';
import Header from './header/header';

interface IProps {
  isUserLoggedIn: boolean;
}

function App(props: IProps) {
  const { isUserLoggedIn } = props;
  return (
    <div className="App">
      <Header />
      {isUserLoggedIn ? <HomePage /> : <LoginPage />}
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  isUserLoggedIn: state.user.isLoggedIn,
});

export default connect(mapStateToProps)(App);
