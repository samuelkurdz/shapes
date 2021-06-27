// eslint-disable-next-line no-use-before-define
import React from 'react';
import { connect } from 'react-redux';
import { removeUser } from '../../state/user/user.action';
import './header.scss';

interface HeaderProps {
  logoutUser: () => void;
}

const Header = (props: HeaderProps) => {
  const { logoutUser } = props;

  const logout = () => {
    logoutUser();
  };

  return (
    <header>
      <h2>SHAPES</h2>
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
    </header>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  logoutUser: () => dispatch(removeUser()),
});

export default connect(null, mapDispatchToProps)(Header);
