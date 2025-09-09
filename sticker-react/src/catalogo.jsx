import { Link } from 'react-router-dom';

function Catalogo() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Catálogo</h1>
      <p>Esta es la página del catálogo.</p>

      <Link to="/">← Volver al inicio</Link>
    </div>
  );
}

export default Catalogo;
