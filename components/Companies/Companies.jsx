import React from "react";
import styles from "./Companies.module.scss";
import Title from "../typography/Title/Title";
import Image from "next/image";

const Companies = () => {
  return (
    <div className={styles.container}>
      <Title text={"Partying with:"} />
      <div className={styles.companies__Container}>
        <Image
          width={250}
          height={250}
          src={"/images/companies/reubens_retreat_clear.png"}
          className={styles.companies__Image}
        />
        <Image
          width={250}
          height={250}
          src={"/images/companies/BBC_Radio_Manchester_clear.png"}
          className={styles.companies__Image}
        />
        <Image
          width={250}
          height={250}
          src={"/images/companies/trafford_centre_logo.png"}
          className={styles.companies__Image}
        />
        <Image
          width={250}
          height={250}
          src={"/images/companies/medequip4kids_clear.png"}
          className={styles.companies__Image}
        />
        <Image
          width={250}
          height={250}
          src={"/images/companies/RMCH_logo.png"}
          className={styles.companies__Image}
        />
      </div>
    </div>
  );
};

export default Companies;
