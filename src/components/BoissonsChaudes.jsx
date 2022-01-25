import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';


const BoissonsChaudes = () => {
    const [hotDrinks, setHotDrinks] = useState([]);

    useEffect(() => {
        const fetchDrinks = async() => {
            const result = await axios(`http://localhost:3005/api/categories/1/products/`);
            setHotDrinks (result.hotDrinks);
        };
        fetchDrinks();        
    }, [hotDrinks]);

    return (
        <div className='boissons-chaudes'>
            <h1>Vous trouverez ici, toutes une gamme de cafés</h1>
           <Fragment>
           <ul>
               {hotDrinks && hotDrinks.map(item =>(
                   <li key={item.id}>
                   <p>{item.name}</p>
                   </li>
               ))}
           </ul>
           </Fragment>
        </div>
    );
};

export default BoissonsChaudes;
