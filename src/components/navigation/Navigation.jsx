import { NavLink } from "react-router-dom";
import { FaInstagram, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { useState } from "react";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <div className={styles.nav}>
          <h1>Australia</h1>
          <div>
            <a href="https://www.instagram.com/mijam31/" target="_blank">
              <FaInstagram />
            </a>
          </div>
          <ul className={styles.menu}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>

            <button onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </ul>
        </div>
        <div className={styles.line}></div>
      </nav>
      {menuOpen && (
        <div className={styles.burgermenu}>
          <ul className={styles.navLinks}>
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={toggleMenu}>
                Gallery
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
