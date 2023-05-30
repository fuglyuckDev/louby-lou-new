import React from "react";
import styles from "./Card.module.scss";
import Title from "../typography/Title/Title";
import Body from "../typography/Body/Body";
import Image from "next/image";
import Book from "../Book/Book";

const Card = ({ title, desc, img, pos }) => {
  return (
    <div
      className={
        pos === "left" ? styles.container__Left : styles.container__Right
      }
    >
      <div className={styles.details__Container}>
        <div className={styles.title__Container}>
          <Title text={title} />
        </div>
        <div className={styles.body__Container}>
          <Body text={desc} />
          <Book />
        </div>
      </div>
      <div className={styles.image__Container}>
        <Image
          width={600}
          height={480}
          src={img}
          className={styles.card__Image}
        />
      </div>
    </div>
  );
};

export default Card;
