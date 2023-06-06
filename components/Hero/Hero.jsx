import React from "react";
import styles from "./Hero.module.scss";
import HeroTitle from "../typography/HeroTitle/HeroTitle";

const Hero = ({ title, button, src }) => {
  return (
    <div className={styles.heroContainer}>
      <HeroTitle text={title} button={button} />
      <video autoPlay muted loop playsInline className={styles.video}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
