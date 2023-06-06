import React from "react";
import styles from "./Navigation.module.scss";
import Image from "next/image";
import Burger from "../Burger/Burger";
import Link from "next/link";

const Navigation = () => {
  let links = [
    { name: "HOME", target: "/" },
    { name: "ABOUT", target: "/about" },
    { name: "EVENTS", target: "/events" },
    { name: "SERVICES", target: "/services" },
    { name: "PRICING", target: "/pricing" },
    { name: "SHOP", target: "/shop" },
  ];
  return (
    <div className={styles.container}>
      <Image
        alt="Louby Lou Logo"
        width={1500}
        height={1500}
        className={styles.logo}
        src={"/images/logos/louby_lou_white.png"}
      ></Image>
      <ul className={styles.links}>
        {links.map((item, idx) => (
          <li key={idx}>
            <Link href={item.target} key={idx}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Burger />
      <button className={styles.button}>Book Now</button>
    </div>
  );
};

export default Navigation;
