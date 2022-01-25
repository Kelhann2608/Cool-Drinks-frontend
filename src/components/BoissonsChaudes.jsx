import React, { useState, useEffect } from 'react';
import axios from 'axios';


const BoissonsChaudes = () => {
    const [hotDrinks, setHotDrinks] = useState([]);

    useEffect(() => {
        const fetchDrinks = async() => {
            const result = await axios(`http://localhost:3005/api/categories/1/products/`);
            setHotDrinks (result.hotDrinks);
        };
        fetchDrinks();        
    }, []);

    return (
        <div className='boissons-chaudes'>
            <h1>Vous trouverez ici, toutes une gamme de cafés</h1>
           <div>
           <ul>
               {hotDrinks && hotDrinks.map(hotDrink =>(
                   <li key={hotDrink.id}>
                   <p>{hotDrink.name}</p>
                   </li>
               ))}
           </ul>
           </div>
        </div>
    );
};

export default BoissonsChaudes;
