import { useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.svg";

import MenuIcon from "../../assets/icon-menu.svg";
import CloseIcon from "../../assets/icon-menu-close.svg";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleOpenMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className="header">
      <img src={Logo} alt="logo" className="logo" />

      <ul className={`menu__links ${showMenu ? "menu--open" : "menu--close"}`}>
        <li className="menu__item">Home</li>
        <li className="menu__item">New</li>
        <li className="menu__item">Popular</li>
        <li className="menu__item">Trending</li>
        <li className="menu__item">Categories</li>
      </ul>

      <button className="menu__control" onClick={handleOpenMenu}>
        <img src={showMenu ? CloseIcon : MenuIcon} alt="menu control" />
      </button>
    </header>
  );
}

export default Header;
