import { useState, useEffect } from "react";
import "./Navbar.css";
import reactLogo from "../../assets/react.svg";
import MobileMenu from "../mobileMenu/MobileMenu";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="header">
        <a href="http://localhost:5173/">
          <img src={reactLogo} alt="React logo" />
        </a>

        {isMobile ? (
          <MobileMenu />
        ) : (
          <ul>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Productos</li>
            <li>Trabajos</li>
            <li>Contacto</li>
          </ul>
        )}
      </header>
    </>
  );
};

export default Navbar;
