import React, { useEffect, useState } from "react";
import axios from "axios";

const BoissonsChaudes = () => {
  const [hotDrinks, setHotDrinks] = useState();
  useEffect(() => {
    axios.get("http://localhost:3005/api/categories/1/products")
    .then((res) => {
      setHotDrinks(res.data);
    });
  }, []);

  return (
    <div className="boissons-chaudes">
      <h1>Vous trouverez ici, toutes une gamme de cafés</h1>
      <div className="hotdrinks">
        {!hotDrinks ? (
          "No data found"
        ) : (
          <ul className="hotdrink-link">
            {hotDrinks.map((hotDrink, index) => (
              <ul key={index}>
                <li className="hotdrink-link-a">
                  <h2>{hotDrink.name}</h2>

                  <img src={hotDrink.image} alt="hotdrink" className="drinks" />

                  {hotDrink.description}
                </li>
              </ul>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BoissonsChaudes;
