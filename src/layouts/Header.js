import React from "react";
import DarkMode from "../components/DarkMode";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <DarkMode />
    </header>
  );
};

export default Header;
