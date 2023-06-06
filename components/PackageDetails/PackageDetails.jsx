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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis metus diam, ultrices at lectus vitae, tempor ullamcorper arcu. Sed pulvinar at tellus sit amet consectetur. Phasellus rutrum sollicitudin urna ac feugiat. Sed eleifend commodo risus, quis posuere justo.",
            "Quisque sit amet luctus enim. Sed vel urna porta, gravida tellus eu, consequat justo. Nulla iaculis blandit fermentum. Vivamus metus justo, ultricies sit amet placerat non, aliquam ac ante. Donec semper mauris mi, quis pellentesque erat pretium sed. Cras sed sagittis lacus.",
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
