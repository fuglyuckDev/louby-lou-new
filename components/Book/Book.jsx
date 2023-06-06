import React from "react";
import styles from "./Book.module.scss";

const Book = ({ button }) => {
  return (
    <button className={button === true ? styles.button : styles.noDisplay}>
      Book Now
    </button>
  );
};

export default Book;
