import React from 'react';
import { motion } from 'framer-motion';

const stickers = [
  { id: 1, nombre: 'Caja Pokémon', imagen: '/Imagenes_Productos/Prod_Cajapokemon.png', precio: 30 },
  { id: 2, nombre: 'Lápices OP', imagen: '/Imagenes_Productos/Prod_Lapicesop.png', precio: 20 },
  { id: 3, nombre: 'Lápices Uchiha', imagen: '/Imagenes_Productos/Prod_Lapicesuchiha.png', precio: 20 },
  { id: 4, nombre: 'Pikachu', imagen: '/Imagenes_Productos/Prod_Pikachu.png', precio: 15 },
  { id: 5, nombre: 'Rollo Sticker KNY', imagen: '/Imagenes_Productos/Prod_Rollostickerkny.png', precio: 25 },
  { id: 6, nombre: 'Stickers Dragon Ball', imagen: '/Imagenes_Productos/Prod_Stickersdragonball.png', precio: 18 },
  { id: 7, nombre: 'Stickers Rick y Morty', imagen: '/Imagenes_Productos/Prod_Stickersrickymorty.png', precio: 18 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -10, y: 60 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0, 
    y: 0,
    transition: { type: 'spring', bounce: 0.6, duration: 0.8 }
  }
};

function Catalogo() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(circle at 20% 20%, #4f8cff22 0%, #181c3a 100%)',
      padding: '40px 0'
    }}>
      <motion.h2
        initial={{ opacity: 0, scale: 0.8, y: -40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring', bounce: 0.5 }}
        style={{
          textAlign: 'center',
          color: '#fff',
          marginBottom: '40px',
          fontSize: '2.5rem',
          textShadow: '0 2px 8px #4f8cff'
        }}
      >
        Catálogo StickerMania
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center'
        }}
      >
        {stickers.map((sticker, i) => (
          <motion.div
            key={sticker.id}
            variants={cardVariants}
            whileHover={{
              scale: 1.08,
              rotate: [0, 6, -6, 0],
              boxShadow: '0 8px 32px #4f8cff88',
              background: 'linear-gradient(135deg, #23244a 60%, #4f8cff33 100%)'
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              background: 'rgba(34, 34, 68, 0.95)',
              borderRadius: '16px',
              boxShadow: '0 4px 16px #0004',
              padding: '18px',
              width: '220px',
              textAlign: 'center',
              color: '#fff',
              marginBottom: '20px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.img
              src={sticker.imagen}
              alt={sticker.nombre}
              initial={{ scale: 0.9, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                width: '100%',
                height: '140px',
                objectFit: 'contain',
                marginBottom: '16px',
                borderRadius: '8px',
                background: '#222'
              }}
            />
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{ fontSize: '1.2rem', margin: '0 0 10px 0' }}
            >
              {sticker.nombre}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.14 }}
              style={{ margin: '0 0 12px 0', fontWeight: 'bold' }}
            >
              Precio: ${sticker.precio}
            </motion.p>
            <motion.button
              whileHover={{
                backgroundColor: '#fff',
                color: '#4f8cff',
                scale: 1.13,
                boxShadow: '0 2px 12px #4f8cff66',
                textShadow: '0 0 8px #4f8cff'
              }}
              whileTap={{
                scale: 0.95,
                backgroundColor: '#4f8cff',
                color: '#fff'
              }}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                background: '#4f8cff',
                color: '#fff',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 2px 8px #4f8cff66',
                transition: 'background 0.2s, color 0.2s'
              }}
            >
              <motion.span
                initial={{ opacity: 0.7 }}
                animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                style={{ display: 'inline-block' }}
              >
                ✨
              </motion.span>
              &nbsp;Agregar al carrito
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Catalogo;
