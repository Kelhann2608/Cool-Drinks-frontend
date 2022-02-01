import React, { useEffect, useState } from "react";
import axios from "axios";

const BoissonsFroides = () => {
  const [coldDrinks, setColdDrinks] = useState();
  useEffect(() => {
    axios.get("http://localhost:3005/api/categories/2/products").then((res) => {
      setColdDrinks(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Vous trouverez ici, toute une gamme de smoothies</h1>
      <div className="hotdrinks">
        {!coldDrinks ? (
          "No data found"
        ) : (
          <ul className="hotdrink-link">
            {coldDrinks.map((coldDrink, index) => (
              <ul key={index}>
                <div className="hotdrink-link-a">

                  <h2>{coldDrink.name}</h2>

                  <img src={coldDrink.image} alt="colddrinks" className="drinks" />

                  {coldDrink.description}
                </div>
              </ul>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BoissonsFroides;
