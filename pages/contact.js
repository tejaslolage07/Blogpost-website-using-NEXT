import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { name, phone, email, desc };

    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then(() => {
        alert("Email sent successfully");
        setname("");
        setemail("");
        setphone("");
        setdesc("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (event) => {
    if (event.target.name == "phone") {
      setphone(event.target.value);
    } else if (event.target.name == "email") {
      setemail(event.target.value);
    } else if (event.target.name == "name") {
      setname(event.target.value);
    } else if (event.target.name == "desc") {
      setdesc(event.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Contact us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name
          </label>
          <input className={styles.input} htmlFor="name" value={name} onChange={handleChange} name="name" id="name" required />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Phone number
          </label>
          <input className={styles.input} htmlFor="phone" value={phone} onChange={handleChange} name="phone" id="phone" required />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email address
          </label>
          <input className={styles.input} style={{ margin: "0px" }} htmlFor="email" value={email} onChange={handleChange} name="email" id="email" required />
          <div id="emailHelp" className={styles.dilasa}>
            Psst! We won&#x27;t share your phone/email with anyone else.
          </div>
          {/* &#x27; is the character sequence for apostrophe or single quote (') */}
        </div>
        <div className={styles.mb3}>
          <textarea className={styles.textarea} onChange={handleChange} value={desc} placeholder="Elaborate your concern" id="desc" name="desc" required ></textarea>
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
