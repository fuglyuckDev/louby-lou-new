import React from "react";
import styles from "./Hero.module.scss";
import HeroTitle from "../typography/HeroTitle/HeroTitle";

const Hero = ({ title }) => {
  return (
    <div className={styles.heroContainer}>
      <HeroTitle text={title} />
      <video autoPlay muted loop className={styles.video}>
        <source src="/videos/Pink_n_purple_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;