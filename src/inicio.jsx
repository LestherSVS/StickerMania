import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Manía Store</h1>
      <p>Elige una sección para continuar</p>

      <div>
        <Link to="/">🏠 Inicio</Link><br />
        <Link to="/catalogo">📦 Catálogo</Link>
      </div>
    </div>
  );
}

export default Inicio;
