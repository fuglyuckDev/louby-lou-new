import React, { useEffect, useState } from "react";
import Title from "../typography/Title/Title";
import styles from "./Contact.module.scss";

const Contact = () => {
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    let dateInput = document.getElementById("date");
    dateInput.min = new Date().toISOString().split("T")[0];

    document.getElementById("contactMethod").addEventListener("change", () => {
      if (document.getElementById("contactMethod").value === "Zoom") {
        setZoom(true);
      } else {
        setZoom(false);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <Title text={"NEED A CHAT?"} />
      </div>
      <div className={styles.form__Container}>
        <form>
          <div className={styles.input__Container}>
            <label>Name:</label>
            <input required type="text"></input>
          </div>
          <div className={styles.input__Container}>
            <label>Email:</label>
            <input required type="email"></input>
          </div>
          <div className={styles.input__Container}>
            <label>Mobile:</label>
            <input required type="tel"></input>
          </div>
          <div className={styles.input__Container}>
            <label>Preferred contact method:</label>
            <select id="contactMethod">
              <option value="Zoom">Zoom</option>
              <option selected value="Mobile">
                Mobile
              </option>
              <option value="Email">Email</option>
            </select>
          </div>
          <div
            className={
              zoom === true ? styles.date__Container : styles.noDisplay
            }
          >
            <div className={styles.input__Container}>
              <label>Select date:</label>
              <input id="date" type="date"></input>
            </div>
            <div className={styles.input__Container}>
              <label>Select time:</label>
              <input id="time" type="time"></input>
            </div>
          </div>
          <div className={styles.input__Container}>
            <label>Query:</label>
            <textarea></textarea>
          </div>
          <button>Send Enquiry</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
