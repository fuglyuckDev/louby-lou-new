import React from "react";
import styles from "./Navigation.module.scss";
import Image from "next/image";

const Navigation = () => {
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
        <li>Link</li>
        <li>Link2</li>
        <li>Link3</li>
        <li>Link4</li>
        <li>Link5</li>
      </ul>
      <button className={styles.button}>Book Now</button>
    </div>
  );
};

export default Navigation;
