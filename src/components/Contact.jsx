import React, { useRef, useState } from "react";
import  emailjs  from "@emailjs/browser";
import "./Contact.css";



const Contact = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm("service_xsdqxs6", "template_tiuvcui", form.current, "user_nuIypJHdgUWrU6y1HzD4d")
      .then((res) => {
        console.log("success !");
        setName("");
        setFirstName("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          (document.querySelector(".form-message").innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
      );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <h1 className="contact-h1">
        Pour vos commandes personnalisées, veuillez nous laisser vos coordonnées
      </h1>
      <div className="form-content">
        <label for="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
          autoComplete="off"
        />
        <label for="firstname">Prénom</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="prénom"
          value={firstName}
        />
        <label for="phone">Téléphone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="téléphone"
          value={phone}
        />
        <div className="email-content">
          <label for="email">Email</label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
          />
          <label id="not-mail">Email non valide</label>
        </div>
        <div className="select-content">
          <label for="select">Demande</label>
          <select name="select" type="select" id="select">
            <option value="">--Veuillez choisir une option</option>
            <option value="devis">Devis</option>
            <option value="réclamation">Réclamation</option>
            <option value="commandes">Commandes</option>
          </select>
        </div>
        <div className="message-content">
          <label for="msg">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message *"
            value={message}
          />
        </div>
      </div>
      <input
        className="button-contact"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
      <div className="form-message"></div>
    </form>
  );
};

export default Contact;
