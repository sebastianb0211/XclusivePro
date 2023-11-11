
import React, { useState } from 'react';
import Header from "./components/Header";
import Login from "./components/Login";
import Registro from "./components/Registro";
import './index.css'

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarLogin, setMostrarLogin] = useState(true);

  const registrarUsuario = (nombre, password) => {
    const usuarioExistente = usuarios.find((usuario) => usuario.nombre === nombre);
    if (usuarioExistente) {
      alert('El usuario ya está registrado. Por favor, inicia sesión.');
      return;
    }

    const nuevoUsuario = { nombre, password };
    setUsuarios([...usuarios, nuevoUsuario]);
  };

  const handleInicioSesion = (nombre, password) => {
    const usuarioAutenticado = usuarios.find(
      (usuario) => usuario.nombre === nombre && usuario.password === password
    );

    if (usuarioAutenticado) {
      setMostrarLogin(false);
      Swal.fire({
        title: "Super",
        text: `Bienvenido, ${nombre}!`,
        icon: "success"
      });
      
    } else {
      Swal.fire({
        title: "ops",
        text: 'Credenciales incorrectas. Por favor, verifica tu usuario y contraseña.' ,
        icon: "error"
      });
    
    }
  };

  return (
    <div>
      <Header />
      <div className="inicio-sesion">
        {mostrarLogin ? (
          <Login onToggleRegistro={() => setMostrarLogin(false)} onInicioSesion={handleInicioSesion} />
        ) : (
          <Registro onToggleInicioSesion={() => setMostrarLogin(true)} onRegistro={registrarUsuario} />
        )}
      </div>
    </div>
  );
}

export default App;
