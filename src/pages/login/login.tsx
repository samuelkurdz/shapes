// eslint-disable-next-line no-use-before-define
import React from 'react';
import './login.scss';

const LoginPage = () => {
  return (
    <div className="login-page max-App-View">
      <form action="">
        {/* <h2>SHAPES</h2> */}
        <div className="form-group">
          <label htmlFor="username">
            <p>UserName</p>
            <input type="text" name="username" id="username" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <p>Password</p>
            <input type="password" name="password" id="password" />
          </label>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
