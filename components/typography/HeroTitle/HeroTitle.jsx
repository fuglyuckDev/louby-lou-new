import React from "react";
import styles from "./HeroTitle.module.scss";
import Book from "@/components/Book/Book";

const HeroTitle = ({ text }) => {
  return (
    <div className={styles.hero__Container}>
      <h1 className={styles.title}>{text}</h1>
      <div className={styles.button__Container}>
        <Book />
        <button>Birthday Parties</button>
      </div>
    </div>
  );
};

export default HeroTitle;
