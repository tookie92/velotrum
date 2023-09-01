'use client'
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  const cursorStyle: React.CSSProperties = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    zIndex: 9999,
    pointerEvents: 'none',
    width: '12px',
    height: '12px',
    backgroundColor: 'blue', // Couleur de votre cercle
    borderRadius: '50%', // Pour rendre le cercle
    transform: 'translate(-50%, -50%)', // Pour centrer le cercle sur le curseur
  };

  return <div style={cursorStyle} />;
};

export default CustomCursor;
