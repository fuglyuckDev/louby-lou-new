import React from "react";
import styles from "./Hero.module.scss";
import HeroTitle from "../typography/HeroTitle/HeroTitle";

const Hero = ({ title }) => {
  return (
    <div className={styles.heroContainer}>
      <HeroTitle text={title} />
      <video autoPlay muted loop className={styles.video}>
        <source src="/videos/louby_lou_promo.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Hero;
