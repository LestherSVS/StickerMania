import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Menu.css";

const menuItems = [
  { to: "/", label: "🏠 Inicio" },
  { to: "/catalogo", label: "🛍️ Catálogo" },
  { to: "/carrito", label: "🛒 Carrito" },
  { to: "/cuenta", label: "👤 Cuenta" },
  { to: "/favorito", label: "❤️ Favoritos" },
  { to: "/pedidos", label: "📦 Pedidos" },
  { to: "/suscrip", label: "🔔 Suscripción" },
];

export default function Menu() {
  const location = useLocation();
  return (
    <motion.nav
      className="menu-animada"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
    >
      <motion.div
        className="brand-animada"
        initial={{ scale: 0.7, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
      >
        <motion.span
          className="dot-animada"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
        Manía Store
      </motion.div>
      <ul>
        {menuItems.map((item, i) => (
          <motion.li
            key={item.to}
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 100 }}
          >
            <Link
              to={item.to}
              className={location.pathname === item.to ? "active" : ""}
            >
              {item.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
