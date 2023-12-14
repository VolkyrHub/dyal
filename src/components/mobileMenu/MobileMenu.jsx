import "./MobileMenu.css";
import { useState } from "react";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="mobile-menu">
      <button onClick={toggleMenu} className="mobile-button">
        ☰
      </button>
      <div className={`menu-options ${menuOpen ? "show" : ""}`}>
        <a href="#" onClick={closeMenu}>
          Inicio
        </a>
        <a href="#" onClick={closeMenu}>
          Nosotros
        </a>
        <a href="#" onClick={closeMenu}>
          Productos
        </a>
        <a href="#" onClick={closeMenu}>
          Trabajos
        </a>
        <a href="#" onClick={closeMenu}>
          Contacto
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
