import React, { useState } from "react";
import './Admin.css';

const Admin = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    };
  return (
    <div className="admin-container">
      <h1 className="admin-h1">
        Pour accéder à la plateforme d'administration, veuillez vous connecter
      </h1>
      <div className="admin-content">
      <label htmlFor="login">Login</label>
        <input
          className="input-admin"
          type="text"
          name="login"
          id="login"
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Login"
          value={login}
        />
        <label htmlFor="password">Password</label>
        <input
        className="input-admin"
          type="text"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          value={password}
        />
        <button className="button-admin" type="button" value="connecter" onClick={handleSubmit}>Connecter</button>
      </div>
    </div>
  );
};

export default Admin;
