import React, { useEffect, useState } from 'react';
import axios from "axios";

const BoissonsFroides = () => {
    const [coldDrinks, setColdDrinks] = useState();
    useEffect(() => {
      axios.get("http://localhost:3005/api/categories/2/products").then((res) => {
        console.log(res.data);
        setColdDrinks(res.data);
      });
    }, []);
  
    return (
        <div>
           <h1>Vous trouverez ici, toute une gamme de smoothies</h1> 
           <div>
           {!coldDrinks ? (
          "No data found"
        ) : (
          <ul>
            {coldDrinks.map((coldDrink, index) => (
              <ul key={index}>
                <li>{coldDrink.name}</li>
                <li>{coldDrink.description}</li>
                <li>{coldDrink.image}</li>
              </ul>
            ))}
          </ul>
        )}
           </div>
        </div>
    );
};

export default BoissonsFroides;