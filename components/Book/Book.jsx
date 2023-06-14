import React from "react";
import styles from "./Book.module.scss";
import Link from "next/link";

const Book = ({ button, type }) => {
  switch (type) {
    case "events":
      return (
        <Link className={styles.link} href={"/events"}>
          {" "}
          <button
            className={button === true ? styles.button : styles.noDisplay}
          >
            Book Events
          </button>
        </Link>
      );
      break;
    case "services":
      return (
        <Link className={styles.link} href={"/services"}>
          {" "}
          <button
            className={button === true ? styles.button : styles.noDisplay}
          >
            Book Now
          </button>
        </Link>
      );
      break;
    case "pricing":
      return (
        <Link className={styles.link} href={"/pricing"}>
          {" "}
          <button
            className={button === true ? styles.button : styles.noDisplay}
          >
            Enquire Now
          </button>
        </Link>
      );
      break;
  }
};

export default Book;
