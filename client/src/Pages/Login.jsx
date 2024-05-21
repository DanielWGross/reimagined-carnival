import { useMutation, gql } from '@apollo/client';
import React from 'react';
import * as Auth from '../utils/auth';

const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      _id
      username
      token
    }
  }
`;

function Login() {
  const [loginMutation, { data, loading, error }] = useMutation(LOGIN);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleOnChange = (e) => {
    e.preventDefault();

    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginData = await loginMutation({
        variables: {
          username,
          password,
        },
      });

      Auth.login(loginData.data.login.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        id="username"
        name="username"
        onChange={handleOnChange}
      />
      <label htmlFor="username">Username</label>

      <input
        type="password"
        id="password"
        name="password"
        onChange={handleOnChange}
      />
      <label htmlFor="password">Password</label>

      <button type="submit">Login!</button>
    </form>
  );
}

export default Login;
