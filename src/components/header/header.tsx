// eslint-disable-next-line no-use-before-define
import React from 'react';
import { connect } from 'react-redux';
import { removeUser, setCurrentUser } from '../../state/user/user.action';
import './header.scss';

interface HeaderProps {
  isUserLoggedIn: boolean;
  // eslint-disable-next-line no-unused-vars
  setUser: (name: string) => void;
  logoutUser: () => void;
}

const Header = (props: HeaderProps) => {
  const { isUserLoggedIn, setUser, logoutUser } = props;

  const setName = () => {
    setUser('sam');
  };

  const logout = () => {
    logoutUser();
  };

  return (
    <header>
      <h2>SHAPES</h2>
      {isUserLoggedIn ? (
        <button type="button" className="logout" onClick={logout}>
          <p>Logout</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      ) : (
        <button type="button" className="login" onClick={setName}>
          <p>Login</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
        </button>
      )}
    </header>
  );
};

const mapStateToProps = (state: any) => ({
  isUserLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch: any) => ({
  setUser: (user: string) => dispatch(setCurrentUser(user)),
  logoutUser: () => dispatch(removeUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
