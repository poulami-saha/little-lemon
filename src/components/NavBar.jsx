import Logo from "../assets/Logo.png";
import styles from "./Navbar.module.css";
const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <img src={Logo} alt="logo" />
      <ul className={styles.navLinks}>
        <li>
          <a href="/" role="button" className={styles.navLink}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" role="button" className={styles.navLink}>
            About
          </a>
        </li>
        <li>
          <a href="/menu" role="button" className={styles.navLink}>
            Menu
          </a>
        </li>
        <li>
          <a href="/book" role="button" className={styles.navLink}>
            Book a table
          </a>
        </li>
        <li>
          <a href="/order-online" role="button" className={styles.navLink}>
            Order Online
          </a>
        </li>
        <li>
          <a href="/login" role="button" className={styles.navLink}>
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
