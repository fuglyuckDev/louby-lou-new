import React from "react";
import styles from "./Body.module.scss";

const Body = ({ text }) => {
  return (
    <>
      {text.map((i) => (
        <p className={styles.body}>{i}</p>
      ))}
    </>
  );
};

export default Body;
