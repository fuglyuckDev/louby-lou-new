import { React, useState, useRef } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = ({ title, altText, button, links }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navMenu = useRef(null);

  return (
    <nav className={styles.container}>
      <ul>
        <li className={button ? styles.button : styles.nodisplay}>
          <Link href="/events-page/">
            <button>Book Tickets</button>
          </Link>
        </li>
        <li className={styles.titleContainer}>
          <h1>{title}</h1>
          <p> {altText}</p>
        </li>
        <li className={styles.menuContainer}>
          <button
            className={styles.menu}
            aria-label="Menu"
            tabIndex="0"
            onClick={() => navMenu.current.focus({ preventScroll: true })}
          >
            <span className={styles.menuIcon} tabIndex="0" />
          </button>
        </li>
      </ul>
      <div
        className={toggleMenu ? styles.dropdownMenu : styles.nodisplay}
        tabIndex="0"
        ref={navMenu}
        onFocus={() => setToggleMenu((prevToggleMenu) => !prevToggleMenu)}
        onBlur={() => setToggleMenu((prevToggleMenu) => !prevToggleMenu)}
      >
        {links.map((item) => (
          <Link key={item.link} href={item.link}>
            <p>{item.name}</p>
            <div />
          </Link>
        ))}
      </div>
      <div />
    </nav>
  );
};

export default Navbar;
