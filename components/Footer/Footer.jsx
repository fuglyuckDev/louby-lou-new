import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Body from "../typography/Body/Body";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer__Container}>
        <div className={styles.logo__Container}>
          <Image
            alt="Louby Lou Logo"
            width={1500}
            height={1500}
            className={styles.logo}
            src={"/images/logos/louby_lou_white.png"}
          ></Image>
        </div>

        <div className={styles.details__Container}>
          <Body text={["Detials"]} />
          <Body
            text={[
              "Mobile: 07779013806",
              "Email: lucy@loubylou.co.uk",
              "Terms and Conditions",
              "Privacy",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
