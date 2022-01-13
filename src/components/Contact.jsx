import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    sendFeedback("***TEMPLAYE_ID***", {
      name,
      firstName,
      phone,
      email,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log('success !');
        setName("");
        setFirstName("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
  };

  return (
    <form className="contact-form">
      <h1 className='contact-h1'>Pour vos commandes personnalisées, veuillez nous laisser vos coordonnées</h1>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
          autoComplete="off"
        />
        <input
          type="text"
          id="firstname"
          name="firstname"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="prénom"
          value={firstName}
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="téléphone"
          value={phone}
        />
        <div className="email-content">          
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
        <div className='select-content'>
          <label for="select">Demande :</label>
          <select name="select" type="select" id="select">
            <option value="">--Veuillez choisir une option</option>
            <option value="devis">Devis</option>
            <option value="réclamation">Réclamation</option>
            <option value="commandes">Commandes</option>
          </select>
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
        />
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