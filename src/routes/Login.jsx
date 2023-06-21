import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import usersData from '../users.json';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Procurar pelo usuário com o nome de usuário correspondente
    const user = usersData.users.find((user) => user.email === username);

    if (user) {
      // Verificar se a senha está correta
      if (user.password === password) {
        // Senha correta, redirecionar para a página inicial
        navigate('/');
      } else {
        // Senha incorreta
        setErrorMessage('Email e/ou senha inválida');
      }
    } else {
      // Usuário não encontrado
      setErrorMessage('Email e/ou senha inválida');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {errorMessage && <span className="error-message">{errorMessage}</span>}
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;