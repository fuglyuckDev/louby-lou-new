import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <video className={styles.video}>
        <source src="/public/videos/Pink_n_purple_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
