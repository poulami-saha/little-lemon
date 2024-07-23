import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="logo" />
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/" role="button">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" role="button">
                About
              </Link>
            </li>
            <li>
              <Link to="/" role="button">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/booking">Reservation</Link>
            </li>
            <li>
              <Link to="/">Order Online</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </header>
      <div className={`${styles.sideDrawer} ${isOpen ? styles.open : ""}`}>
        <nav className={styles.mobileNav} onClick={toggleMenu}>
          <ul>
            <li>
              <Link to="/" role="button">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" role="button">
                About
              </Link>
            </li>
            <li>
              <Link to="/" role="button">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/booking">Reservation</Link>
            </li>
            <li>
              <Link to="/">Order Online</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && <div className={styles.backdrop} onClick={toggleMenu}></div>}
    </>
  );
};

export default Header;
