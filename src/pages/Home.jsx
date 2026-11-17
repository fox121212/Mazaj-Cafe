import React from "react";
import { Link } from "react-router-dom";
import cupPhoto from "../images/pexels-vishnu-panday-94089132-31106210.jpg";
import frappe from "../images/frappe.jpg";
import latte from "../images/latte.jpg";
import croissant from "../images/croissant.jpg";
import "../styles/Home.css";

// three items we want to show on the home page
const favourites = [
  { id: 1, name: "Dark Chocolate Frappe", price: "7.50$", image: frappe },
  { id: 2, name: "Latte", price: "5.50$", image: latte },
  { id: 3, name: "Butter Croissant", price: "3.50$", image: croissant },
];

const Home = () => {
  return (
    <div className="page">
      <h1 className="page-title">Every Cup Tells a Story</h1>
      <p className="page-text">
        Welcome to Mazaj Cafe, a small specialty coffee shop in Beirut. We pick
        our beans with care, roast them every week, and bake fresh pastries
        every morning.
      </p>

      <div className="box home-about">
        <img src={cupPhoto} alt="A cup of coffee" />
        <div>
          <h2>Made with care</h2>
          <p>
            We study where every bean comes from and how it is roasted, so we
            can bring out the best taste in every cup. From the farm to your
            table, nothing is left to chance.
          </p>
          <Link className="btn" to="/menu">
            See the menu
          </Link>
        </div>
      </div>

      <h2 className="section-title">Our favourites</h2>
      <div className="grid">
        {favourites.map((item) => (
          <div className="box favourite" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Opening hours</h2>
      <div className="box">
        <p>Open every day from 7am to 10pm.</p>
        <p>Dine in, take away, or call us to order ahead.</p>
      </div>
    </div>
  );
};

export default Home;
