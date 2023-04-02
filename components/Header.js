import React from "react";
import Image from "next/image";
function Header() {
  return (
    <nav>
      <figure className="logo-name">
        <div className="logo-image">
          <img src="/logo.jpg" alt="lo" />
        </div>
      </figure>

      <div className="menu-items">
        <ul className="nav-links">
          <li className="link-name">
            <a href="./Home.js">HOME</a>
          </li>
          <li className="link-name">
            <a href="./About.js">ABOUT</a>
          </li>
          <li className="link-name">
            <a href="./Chef.js">CHEF</a>
          </li>
          <li className="link-name">
            <a href="./Media.js">MEDIA</a>
          </li>
          <li className="link-name">
            <a href="./Location.js">LOCATION</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
