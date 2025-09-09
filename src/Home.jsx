import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a Manía Store</h1>
      <Link to="/catalogo">Ir al Catálogo</Link>
    </div>
  );
}