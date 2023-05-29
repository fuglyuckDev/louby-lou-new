import React from "react";
import Title from "../typography/Title/Title";
import Body from "../typography/Body/Body";
import styles from "./About.module.scss";
import Book from "../Book/Book";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about__Container}>
        {/* All text passed into titles gets turned into uppercase */}
        <div className={styles.title__Container}>
          <Title text={"get to know louby lou"} />
        </div>

        {/* Pass an array into body to signify different paragraphs */}
        <Body
          text={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis metus diam, ultrices at lectus vitae, tempor ullamcorper arcu. Sed pulvinar at tellus sit amet consectetur. Phasellus rutrum sollicitudin urna ac feugiat. Sed eleifend commodo risus, quis posuere justo.",
            "Quisque sit amet luctus enim. Sed vel urna porta, gravida tellus eu, consequat justo. Nulla iaculis blandit fermentum. Vivamus metus justo, ultricies sit amet placerat non, aliquam ac ante. Donec semper mauris mi, quis pellentesque erat pretium sed. Cras sed sagittis lacus.",
          ]}
        />
        <Book />
      </div>
    </div>
  );
};

export default About;
