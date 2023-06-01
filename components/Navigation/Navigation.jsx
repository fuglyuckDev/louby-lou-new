import React from "react";
import styles from "./Navigation.module.scss";
import Image from "next/image";
import Burger from "../Burger/Burger";
import Link from "next/link";

const Navigation = () => {
  let links = [
    { name: "home", target: "/" },
    { name: "Link 2", target: "/" },
    { name: "Link 3", target: "/" },
    { name: "Link 4", target: "/" },
    { name: "Link 5", target: "/" },
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
          <li>
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
