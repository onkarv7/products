import Image from "next/image";
import Link from "next/link";
import React from "react";
import { logo, lorem, search } from "../assets";

const Header = () => {
  return (
    <>
    <div className="lorem-section">
    <Image src={lorem} width={150} height={20} />
    <Image src={lorem} width={150} height={20} /> <Image src={lorem} width={150} height={20} />

    </div>
    <header className="header-container">
      <div className="head-subcontainer">
        <div className="header-section">
        
          <Image src={logo} width={30} height={30} />

          <div className="logo-container">
          <Link legacyBehavior href="/">
            <a className="logo">LOGO</a>
          </Link>
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
       

          <Image src={search} width={300} height={30} />
        </div>
     
      </div>
    </header>
    </>
  );
};

export default Header;
