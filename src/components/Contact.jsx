import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email! :(");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ck5iagr",
        "template_juwwjhm",
        e.target,
        "user_cmHTWP8Hb3ZAZaP4hwNoI"
      )
      .then((res) => {
        console.log("success !");
      })
      .catch((err) =>
        console.log("Une erreur s'est produite, veuillez réessayer.")
      );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <h1 className="contact-h1">
        Pour vos commandes personnalisées, veuillez nous laisser vos coordonnées
      </h1>
      <div className="form-content">
        <label htmlFor="lastname">Nom</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="nom *"
          autoComplete="off"
        />
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="prénom"
        />
        <label htmlFor="phone">Téléphone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="téléphone"
        />
        <div className="email-content">
          <label htmlFor="email">Email</label>
          <input
            type="mail"
            id="email"
            name="email"
            placeholder="email *"
            autoComplete="off"
            onChange={(e) => validateEmail(e)}
          />
          <span>{emailError}</span>
        </div>
        <div className="select-content">
          <label htmlFor="select">Demande</label>
          <select name="select" type="select" id="select">
            <option value="">--Veuillez choisir une option</option>
            <option value="devis">Devis</option>
            <option value="réclamation">Réclamation</option>
            <option value="commandes">Demandes</option>
          </select>
        </div>
        <div className="message-content">
          <label htmlFor="msg">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="message *"
          />
        </div>
      </div>
      <button className="button-contact" type="submit" value="Envoyer">
        Envoyer
      </button>
    </form>
  );
};

export default Contact;
