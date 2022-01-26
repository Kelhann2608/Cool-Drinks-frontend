import React, { useEffect, useState } from "react";
import axios from "axios";

const BoissonsChaudes = () => {
  const [hotDrinks, setHotDrinks] = useState();
  useEffect(() => {
    axios.get("http://localhost:3005/api/categories/1/products").then((res) => {
      console.log(res.data);
      setHotDrinks(res.data);
    });
  }, []);

  return (
    <div className="boissons-chaudes">
      <h1>Vous trouverez ici, toutes une gamme de cafés</h1>
      <div>
        {!hotDrinks ? (
          "No data found"
        ) : (
          <ul>
            {hotDrinks.map((hotDrink, index) => (
              <ul key={index}>
                <li>{hotDrink.name}</li>
                <li>{hotDrink.description}</li>
                <li>{hotDrink.image}</li>
              </ul>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BoissonsChaudes;
