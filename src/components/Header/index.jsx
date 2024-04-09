import { useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.svg";

import MenuIcon from "../../assets/icon-menu.svg";
import CloseIcon from "../../assets/icon-menu-close.svg";

function Header() {
  const [showMenu, setShowMenu] = useState(0);

  function handleOpenMenu() {
    setShowMenu(showMenu + 1);
  }

  function menuControl() {
    /* 
    
    Función creada para hacer que en el 
    primer renderizado no se muestre la animación.
    
    Por defecto el estado se encuentra en 0, el cual 
    hace que se oculte el menú, en número impares
    el menú aparecerá y en los pares se ocultara.ß
    */

    if (showMenu == 0) {
      return "menu--hidden";
    } else if (showMenu % 2 == 0) {
      return "menu--close";
    } else {
      return "menu--open";
    }
  }

  return (
    <header className="header">
      <img src={Logo} alt="logo" className="logo" />

      <ul className={`menu__links ${menuControl()}`}>
        <li className="menu__item">Home</li>
        <li className="menu__item">New</li>
        <li className="menu__item">Popular</li>
        <li className="menu__item">Trending</li>
        <li className="menu__item">Categories</li>
      </ul>

      <button className="menu__control" onClick={handleOpenMenu}>
        <img
          src={showMenu % 2 == 0 ? MenuIcon : CloseIcon}
          alt="menu control"
        />
      </button>
    </header>
  );
}

export default Header;
