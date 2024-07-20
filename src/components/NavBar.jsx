const NavBar = () => {
  return (
    <nav>
      <img src={Logo} alt="logo" />
      <ul>
        <li>
          <a href="/" role="button">
            Home
          </a>
        </li>
        <li>
          <a href="/about" role="button">
            About
          </a>
        </li>
        <li>
          <a href="/menu" role="button">
            Menu
          </a>
        </li>
        <li>
          <a href="/book" role="button">
            Book a table
          </a>
        </li>
        <li>
          <a href="/order-online" role="button">
            Order Online
          </a>
        </li>
        <li>
          <a href="/login" role="button">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
