import Logo from "../assets/logo.svg";
import MenuBar from "./MenuBar";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="logo" className="logo" />

      <MenuBar />
    </header>
  );
}

export default Header;
