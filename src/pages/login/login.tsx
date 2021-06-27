/* eslint-disable no-console */
// eslint-disable-next-line no-use-before-define
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../state/user/user.action';
import './login.scss';

interface LoginPageProps {
  // eslint-disable-next-line no-unused-vars
  setUser: (name: string) => void;
}

const LoginPage = (props: LoginPageProps) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { setUser } = props;

  const handleLoginFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUser(formData.username);
  };

  const handleFormInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="login-page max-App-View">
      <form onSubmit={handleLoginFormSubmit}>
        <h2 className="logo">SHAPES</h2>
        <div className="form-group">
          <label htmlFor="username">
            <p>UserName</p>
            <input type="text" name="username" id="username" onChange={handleFormInputChange} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <p>Password</p>
            <input type="password" name="password" id="password" onChange={handleFormInputChange} />
          </label>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setUser: (user: string) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
