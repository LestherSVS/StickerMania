import React from 'react';
import './Menu.css';

export default function Menu() {
  return (
    <nav className="menu">
      <div className="brand">
        <span className="dot"></span> StickerMania
      </div>
      <ul>
        <li><a href="/catalogo">🛍️ Catálogo</a></li>
        <li><a href="/clientes">👤 Clientes</a></li>
        <li><a href="/personalizados">🎨 Personalizados</a></li>
        <li><a href="/envios">🚚 Envíos</a></li>
        <li><a href="/contacto">✉️ Contacto</a></li>
        <li><a href="/quienes-somos">ℹ️ Quiénes somos</a></li>
        <li><a href="/redes">🌐 Redes</a></li>
      </ul>
    </nav>
  );
}