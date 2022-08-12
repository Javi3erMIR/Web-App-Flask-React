import React from "react";
import '@styles/Header.css'

const Header = () => {
    return (
      <div>
        <nav>
          <div className="nav-wrapper custom-navbar">
            <a href="#" className="brand-logo">
              Logo
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/register">Registrarse</a>
              </li>
              <li>
                <a href="/login">Ingresar</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Header;