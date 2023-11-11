
import React, { useState } from 'react';

function Login({ onToggleRegistro, onInicioSesion }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const usuarioRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!usuarioRegex.test(usuario)) {
      setError('El usuario solo debe contener letras y números');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('La contraseña debe tener al menos 6 caracteres, una letra y un número');
      return;
    }

    setError('');

    onInicioSesion(usuario, password);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleLogin}>
        <p className="title">Ingresar</p>
        <input
          placeholder="Usuario"
          className="username input"
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          placeholder="Contraseña"
          className="password input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <label className="nombreLogin" onClick={onToggleRegistro}>
          No tengo cuenta. Registrarme
        </label>
        <button className="btn" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
