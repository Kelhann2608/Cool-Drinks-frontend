import React, { useEffect, useState} from 'react';
import axios from "axios";

const Gourmandises = () => {
    const [delicacies, setDelicacies] = useState();
    useEffect(() => {
      axios.get("http://localhost:3005/api/categories/3/products").then((res) => {
        console.log(res.data);
        setDelicacies(res.data);
      });
    }, []);
    return (
        <div>
           <h1>Vous trouverez ici, toute une gamme de gâteaux et viennoiseries</h1>
           <div>
           {!delicacies ? (
          "No data found"
        ) : (
          <ul>
            {delicacies.map((delicacie, index) => (
              <ul key={index}>
                <li>{delicacie.name}</li>
                <li>{delicacie.description}</li>
                <li>{delicacie.image}</li>
              </ul>
            ))}
          </ul>
        )}
           </div>
        </div>
    );
};

export default Gourmandises;