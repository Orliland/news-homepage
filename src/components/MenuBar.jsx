import { useState } from "react";
import MenuIcon from "../assets/icon-menu.svg";
import CloseIcon from "../assets/icon-menu-close.svg";

function MenuBar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleOpenMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className={showMenu ? "menu__opened" : "menu"}>
      <ul className="menu__container">
        <li className="menu__action">
          <img
            src={showMenu ? CloseIcon : MenuIcon}
            alt="menu"
            className="menu__icon"
            onClick={handleOpenMenu}
          />
        </li>
        <div>
          <li className="menu__item">Home</li>
          <li className="menu__item">New</li>
          <li className="menu__item">Popular</li>
          <li className="menu__item">Trending</li>
          <li className="menu__item">Categories</li>
        </div>
      </ul>
    </nav>
  );

  // <div className="menu">
  //   <ul className="menu__container">
  //   <li className="menu__item">
  //   </li>
  // </ul>
  // </div>
}

export default MenuBar;
