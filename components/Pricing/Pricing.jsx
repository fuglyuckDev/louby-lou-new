import React from "react";
import styles from "./Pricing.module.scss";

const Pricing = ({ data }) => {
  return (
    <div
      className={
        data.important === true ? styles.container__Important : styles.container
      }
      style={
        data.important === true
          ? { backgroundColor: data.colour }
          : {
              backgroundColor: data.colour,
            }
      }
    >
      <div className={styles.inner__Container}>
        <div className={styles.title__Container}>
          <h1 className={styles.package__Name} style={{ color: data.colour }}>
            {data.title}
          </h1>
          <p className={styles.package__Alt}>{data.alt}</p>
        </div>
        <div
          className={styles.pricing__Container}
          style={{ borderBlockColor: data.colour }}
        >
          <p className={styles.package__Price}>{data.price}</p>
          <p
            className={styles.package__PerChild}
            style={{ color: data.colour }}
          >
            For {data.maxKids} children, then £10/child
          </p>
        </div>
        <div className={styles.options__Container}>
          <ul className={styles.options} style={{ color: data.colour }}>
            {data.options.optionsLeft.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <ul className={styles.options} style={{ color: data.colour }}>
            {data.options.optionsRight.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <button
          className={styles.enquire__Button}
          style={{ backgroundColor: data.colour }}
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default Pricing;
