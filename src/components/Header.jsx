function Header() {
  return (
    <div className="contenido-header">
      <a href="">Inicio</a>
      <a href="">Catalogo</a>
      <a href="">Perfil</a>
      <div className="carrito">
        <a href="">
          <img className="imagen-carro" src="src/assets/img/carro-de-la-compra.gif" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Header;
