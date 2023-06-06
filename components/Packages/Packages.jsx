import React from "react";
import Pricing from "../Pricing/Pricing";
import styles from "./Packages.module.scss";

const Packages = () => {
  return (
    <div className={styles.container}>
      <Pricing
        data={{
          title: "Playful Platinum",
          alt: "Want the most for your little one?",
          price: "£450",
          maxKids: 30,
          options: {
            optionsLeft: ["IBIZA", "DANCING", "TREATS", "ROGER RABBIT"],
            optionsRight: ["INTERVIEW", "DOLL", "PIG RACE", "GIGGLES"],
          },
          colour: "#00A0FA",
          important: false,
        }}
      />
      <div>
        <p className={styles.most__Popular}>*MOST POPULAR</p>

        <Pricing
          data={{
            title: "golden giggles",
            alt: "Because your little one is golden!",
            price: "£400",
            maxKids: 20,
            options: {
              optionsLeft: ["IBIZA", "DANCING", "ROGER RABBIT"],
              optionsRight: ["INTERVIEW", "DOLL", "GIGGLES"],
            },
            colour: "#EFB94F",
            important: true,
          }}
        />
      </div>

      <Pricing
        data={{
          title: "super silly silver",
          alt: "To make your party shine and dazzle.",
          price: "£350",
          maxKids: 10,
          options: {
            optionsLeft: ["IBIZA", "DANCING"],
            optionsRight: ["INTERVIEW", "GIGGLES"],
          },
          colour: "#C7C7C7",
          important: false,
        }}
      />
    </div>
  );
};

export default Packages;
