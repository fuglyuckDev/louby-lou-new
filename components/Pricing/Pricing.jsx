import React from "react";
import styles from "./Pricing.module.scss";

const Pricing = ({ data }) => {
  return (
    <div
      style={{
        flex: "2 2 50%",
        boxShadow: `0px 0px 111px -32px ${data.color} `,
      }}
      className={styles.container}
    >
      <div className={styles.pricing__Container}>
        <div className={styles.pricing__Title__Container}>
          <h1 style={{ color: `${data.color}` }}>{data.name}</h1>
          <div className={styles.pricing__Base__Price__Container}>
            <h2>{data.basePrice}</h2>
            <p>Base Price</p>
          </div>
        </div>
        <div
          style={{ borderBottom: `5px solid ${data.color}` }}
          className={styles.divider__With__Text}
        >
          <p>
            For
            <span style={{ color: `${data.color}` }}> {data.maxKids}</span>{" "}
            children, then
            <span style={{ color: `${data.color}` }}> £10</span> /Child
          </p>
        </div>
        <div
          style={{ borderBottom: `5px solid ${data.color}` }}
          className={styles.includes__Container}
        >
          <p>Package includes:</p>
          <div className={styles.options}>
            {/* Map through data moment */}
            {data.options.map((item, idx) => (
              <p key={`${idx}${item}`} style={{ color: `${data.color}` }}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.form__Container}>
          <form>
            <div className={styles.counter__Container}>
              <p>Party size:</p>
              <div>
                <button style={{ color: `${data.color}` }}>-</button>{" "}
                <h3 style={{ color: `${data.color}` }}>{data.maxKids}</h3>{" "}
                <button style={{ color: `${data.color}` }}>+</button>
              </div>
            </div>
            <div className={styles.input__Container}>
              <p>Email:</p>
              <input></input>
            </div>
            <div className={styles.input__Container}>
              <p>Phone Number:</p>
              <input></input>
            </div>
            <div className={styles.select__Container}>
              <p>Party Type:</p>
              <select style={{ color: `${data.color}` }}>
                <option>Option1</option>
              </select>
            </div>
            <div className={styles.select__Container}>
              <p>Preferred Contact Method:</p>
              <select style={{ color: `${data.color}` }}>
                <option>Email</option>
                <option>Telephone</option>
              </select>
            </div>
            <div className={styles.details__Container}>
              <p>Details:</p>
              <textarea></textarea>
            </div>
            <div className={styles.footnote}>
              {" "}
              <p>
                * Total price can change depending on your location. Louby Lou
                is located near Astley, Tyldesley, Manchester. Travel time and
                fuel cost can be taken into account and added to your package
                total. Don’t worry, from the Scottish Highlands to Penzance,
                Louby Lou will get the giggles to you.
              </p>
            </div>

            <div className={styles.enquire__Container}>
              <div>
                <h1 style={{ color: `${data.color}` }}>£450</h1> <p>/ Total</p>
              </div>
              <button style={{ backgroundColor: `${data.color}` }}>
                ENQUIRE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
