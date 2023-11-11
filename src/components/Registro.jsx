
import React, { useState } from 'react';

function Registro({ onToggleInicioSesion, onRegistro }) {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistro = (e) => {
    e.preventDefault();

    const nombreRegex = /^[a-zA-Z\s]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!nombreRegex.test(nombre)) {
      setError('El nombre solo debe contener letras y espacios');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('La contraseña debe tener al menos 6 caracteres, una letra y un número');
      return;
    }

    if (password !== confirmarPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    setError('');

    onRegistro(nombre, password);

    Swal.fire({
        title: "OK",
        text: "Usuario Registrado con exito",
        icon: "success",
      });
  };

  return (
    <div className="container">
      <form className="form1" onSubmit={handleRegistro}>
        <p className="title">Registrar</p>
        <input
          placeholder="Nombre"
          className="username input"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          placeholder="Contraseña"
          className="password input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Confirmar Contraseña"
          className="password input"
          type="password"
          value={confirmarPassword}
          onChange={(e) => setConfirmarPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <label className="nombreLogin" onClick={onToggleInicioSesion}>
          Iniciar Sesión
        </label>
        <button className="btn" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Registro;
