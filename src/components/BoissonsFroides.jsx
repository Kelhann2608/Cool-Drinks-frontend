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
           <div className='hotdrinks'>
           {!coldDrinks ? (
          "No data found"
        ) : (
          <ul className='hotdrink-link'>
            {coldDrinks.map((coldDrink, index) => (
              <ul key={index}>
                <li className='hotdrink-link-a'>{coldDrink.name}</li>
                <li className='hotdrink-link-a'>{coldDrink.description}</li>
                <li className='hotdrink-link-a'>{coldDrink.image}</li>
              </ul>
            ))}
          </ul>
        )}
           </div>
        </div>
    );
};

export default BoissonsFroides;