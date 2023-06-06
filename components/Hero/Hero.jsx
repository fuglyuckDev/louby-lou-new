import React from "react";
import styles from "./Hero.module.scss";
import HeroTitle from "../typography/HeroTitle/HeroTitle";

const Hero = ({ title, button }) => {
  return (
    <div className={styles.heroContainer}>
      <HeroTitle text={title} button={button} />
      <video autoPlay muted loop playsInline className={styles.video}>
        <source src="/videos/louby_lou_promo.webm" type="video/webm" />
        <source src="/videos/louby_lou_promo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
