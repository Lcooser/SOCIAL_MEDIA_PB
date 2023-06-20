import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Enviar os dados do usuário para a API usando o Axios
    axios
      .post('http://localhost:8080/users', { username, password })
      .then((response) => {
        console.log('Usuário cadastrado com sucesso:', response.data);
        // Lógica adicional, como redirecionar para uma página de sucesso
      })
      .catch((error) => {
        console.error('Erro ao cadastrar usuário:', error);
        // Lógica adicional, como exibir uma mensagem de erro ao usuário
      });

    // Limpar os campos de entrada
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Usuário:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Senha:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default UserRegistration;