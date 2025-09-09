
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Catalogo from "./catalogo";
import MenuAnimado from "./MenuAnimado";
import "./MenuAnimado.css";

function App() {
  return (
    <>
      <MenuAnimado />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        {/* Puedes agregar más rutas aquí si creas más páginas */}
      </Routes>
    </>
  );
}

export default App;
