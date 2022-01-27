import React, { useEffect, useState } from "react";
import axios from "axios";

const Gourmandises = () => {
  const [delicacies, setDelicacies] = useState();
  useEffect(() => {
    axios.get("http://localhost:3005/api/categories/3/products").then((res) => {
      setDelicacies(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Vous trouverez ici, toute une gamme de gâteaux et viennoiseries</h1>
      <div className="hotdrinks">
        {!delicacies ? (
          "No data found"
        ) : (
          <ul className="hotdrink-link">
            {delicacies.map((delicacie, index) => (
              <ul key={index}>
                <li className="hotdrink-link-a">

                  <h2>{delicacie.name}</h2>

                  <img src={delicacie.image} alt="gourmandises" />

                  {delicacie.description}
                </li>
              </ul>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Gourmandises;
