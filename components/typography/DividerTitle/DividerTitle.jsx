import React from "react";
import Title from "../Title/Title";
import Body from "../Body/Body";
import styles from "./DividerTitle.module.scss";

const DividerTitle = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title__Container}>
        <Title text={title} />
      </div>

      <div className={styles.body__Container}>
        <Body text={text} />
      </div>
    </div>
  );
};

export default DividerTitle;
