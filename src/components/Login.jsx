function Login() {
        
  return (
    <div className="container">
      <form className="form" action="">
        <p className="title">Ingresar</p>
        <input placeholder="Usuario" className="username input" type="text" />
        <input
          placeholder="Contraseña"
          className="password input"
          type="password"
        />
        <button className="btn" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
