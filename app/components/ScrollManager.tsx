import { useScroll } from '@react-three/drei';
import { useEffect } from 'react';

function ScrollManager({ section, onSectionChange }) {
  const { scroll } = useScroll();

  useEffect(() => {
    // Calculer la section actuelle en fonction de la valeur de scroll
    const newSection = Math.round(scroll.current / scroll.pages);

    // Si la section actuelle est différente, mettez à jour l'état
    if (newSection !== section) {
      onSectionChange(newSection);
    }
  }, [scroll, section, onSectionChange]);

  return null; // Le ScrollManager n'a pas besoin de rendre du contenu
}

export default ScrollManager;