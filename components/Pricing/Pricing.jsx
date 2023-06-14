import React, { useEffect, useRef, useState } from "react";
import styles from "./Pricing.module.scss";
import emailjs from "@emailjs/browser";

const Pricing = ({ data }) => {
  const form = useRef();

  const [partyCount, setPartyCount] = useState(0);

  useEffect(() => {
    setPartyCount(data.maxKids);
    console.log(partyCount);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm("query_email", "test_email", form.current, "rPVlmRtn45wWuAQVP")
      .then(
        (result) => {
          alert(
            "Email sent! Thank you for your query! We'll get back to you ASAP!"
          );
          window.location.reload();
        },
        (error) => {
          alert(
            `Uh oh! Something went wrong! Try again later (error code for nerds: ${error.text})`
          );
        }
      );
  };

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
            {data.options.map((item, idx) => (
              <p key={`${idx}${item}`} style={{ color: `${data.color}` }}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.form__Container}>
          <form ref={form} id="pricingForm" onSubmit={sendEmail}>
            <div id="counterContainer" className={styles.counter__Container}>
              <label htmlFor={"party-size"}>
                <p>Party size:</p>
              </label>

              <div id="counterDiv">
                <button
                  type="button"
                  style={{ color: `${data.color}` }}
                  onClick={() => {
                    partyCount === data.maxKids
                      ? null
                      : setPartyCount(partyCount - 1);
                  }}
                >
                  -
                </button>
                <input
                  value={partyCount}
                  style={{ display: "none" }}
                  name="party_size"
                  id="party_size"
                  readOnly
                ></input>
                <h3 style={{ color: `${data.color}` }}>{partyCount}</h3>
                <button
                  type="button"
                  style={{ color: `${data.color}` }}
                  onClick={() => {
                    setPartyCount(partyCount + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className={styles.input__Container}>
              <label htmlFor="name">
                <p>Name:</p>
              </label>

              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="Name"
                required
              ></input>
            </div>
            <div className={styles.input__Container}>
              <label htmlFor="email">
                <p>Email:</p>
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="Email"
                required
              ></input>
            </div>
            <div className={styles.input__Container}>
              <label htmlFor="mobile">
                <p>Phone Number:</p>
              </label>
              <input
                required
                type="mobile"
                id="mobile"
                name="user_mobile"
                placeholder="Mobile"
              ></input>
            </div>
            <div className={styles.select__Container}>
              <label htmlFor="party-type">
                <p>Party Type:</p>
              </label>
              <select
                type="event-type"
                id="event"
                name="user_event-type"
                style={{ color: `${data.color}` }}
              >
                <option value="Nothing">None</option>
                <option value="a Party">Parties</option>
                <option value="a Corporate event">Corporate</option>
                <option value="a Wedding">Wedding</option>
                <option value="a Christening">Christening</option>
                <option value="Giggles on Wheels">Giggles on Wheels</option>
                <option value="Hospitals or Special Needs">
                  Hospital / Special Needs
                </option>
              </select>
            </div>
            <div className={styles.select__Container}>
              <label htmlFor="method">
                <p>Preferred Contact Method:</p>
              </label>
              <select
                type="contact-method"
                id="method"
                name="user_contact-method"
                style={{ color: `${data.color}` }}
              >
                <option>Email</option>
                <option>Telephone</option>
              </select>
            </div>
            <div className={styles.details__Container}>
              <label htmlFor="query">
                <p>Query:</p>
              </label>
              <textarea name="message" id="query" required></textarea>
            </div>
            <div className={styles.footnote}>
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
                <h1 name="quote" style={{ color: `${data.color}` }}>
                  {`£${
                    data.priceRaw + (partyCount - data.maxKids) * data.added
                  }`}
                </h1>
                <input
                  style={{ display: "none" }}
                  name="quote"
                  value={`£${
                    data.priceRaw + (partyCount - data.maxKids) * data.added
                  }`}
                  readOnly
                ></input>
                <p>/ Total</p>
              </div>
              <button
                type="submit"
                style={{ backgroundColor: `${data.color}` }}
              >
                ENQUIRE
              </button>
              <input
                name="package"
                value={data.name}
                style={{ display: "none" }}
                readOnly
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
