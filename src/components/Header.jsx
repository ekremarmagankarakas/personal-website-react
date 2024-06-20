import React, { useEffect } from "react";

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="/img/helloIcon.png" alt="Ekrem Armagan Karakas" />
      </a>
      <div className="bx bx-menu" id="menu-icon"></div>
      <nav className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <span className="active-nav"></span>
      </nav>
    </header>
  );
}

export default Header;
