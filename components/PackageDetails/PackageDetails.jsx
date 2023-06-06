import React from "react";
import styles from "./PackageDetails.module.scss";
import Pricing from "../Pricing/Pricing";
import Title from "../typography/Title/Title";
import Body from "../typography/Body/Body";

const PackageDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details__Container}>
        <Title text={"Make it yours"} />
        <Body
          text={[
            "Making the biggest celebration you've set your eyes on? Try my Cheerfully Custom package! This package includes everything the other packages do.",
            "This is YOUR party, make it how you want, got something to add? Let's chat about it!",
          ]}
        />
      </div>
      <Pricing
        data={{
          title: "Cheerfully Custom",
          alt: "Need something more Tailored?",
          price: "£450+",
          maxKids: 40,
          options: {
            optionsLeft: ["IBIZA", "DANCING", "TREATS", "ROGER RABBIT"],
            optionsRight: ["INTERVIEW", "DOLL", "PIG RACE", "GIGGLES", "+MORE"],
          },
          colour: "#cf21ec",
          important: true,
        }}
      />
    </div>
  );
};

export default PackageDetails;
