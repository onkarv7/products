import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>
          <Link legacyBehavior href="/">
            <a className="logo">LOGO</a>
          </Link>
        </h1>
        <nav>
          <ul className="nav-links">
            <li>
              <Link legacyBehavior href="/">
                <a>Shop</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a>Skills</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a>Stories</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
