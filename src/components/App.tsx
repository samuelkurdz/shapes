/* eslint-disable no-console */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../state/user/user.action';
import './App.scss';

function App() {
  // const name = 'sam';
  // const setName = () => {
  //   props.setUser('sam');
  // };
  return (
    <div className="App">
      <header className="App-header">
        <h1>SHAPES</h1>
      </header>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  setUser: (user: string) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
