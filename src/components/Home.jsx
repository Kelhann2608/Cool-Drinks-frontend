import React from "react";
import HomeImage from "./assets/HomeImage.png";

const Home = () => {
  return (
    <div className="home">
      <img className="home-image" src={HomeImage} alt="HomeImage" />
      <h1>Bienvenue sur le site de Cool Drinks</h1>
      <p className="paragraph">
        Ce site a été conçu pour vous permettre de découvrir tous les produits
        que nous vous proposons dans notre boutique
      </p>
      <p className="paragraph">
        Vous y trouverez tout une gamme de produits, des boissons chaudes,
        froides, des petites gourmandises, pour le plus grand plaisirs des
        petits et des grands.
      </p>
      <p className="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellendus, accusantium non quas aperiam saepe dolorem ullam id molestiae 
        temporibus nobis molestias quod debitis, perferendis omnis.<br/> Dicta aliquam possimus pariatur sunt distinctio natus, reiciendis, totam similique dolore error ad quod?</p>
    </div>
  );
};

export default Home;
