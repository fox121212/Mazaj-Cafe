import React, { useState } from "react";
import espresso from "../images/espresso.jpg";
import americano from "../images/americano.jpg";
import latte from "../images/latte.jpg";
import flatWhite from "../images/flatWhite.jpg";
import cappuccino from "../images/cappuccino.jpg";
import cortado from "../images/cortado.jpg";
import coldBrew from "../images/coldBrew.jpg";
import icedLatte from "../images/icedLatte.jpg";
import frappe from "../images/frappe.jpg";
import icedAmericano from "../images/icedAmericano.jpg";
import croissant from "../images/croissant.jpg";
import painAuChocolat from "../images/painAuChocolat.jpg";
import almondTart from "../images/almondTart.jpg";
import cinnamonRolls from "../images/cinnamonRolls.jpg";
import "../styles/Menu.css";

const items = [
  {
    id: 1,
    category: "Espresso",
    name: "Single Espresso",
    desc: "A strong single shot.",
    price: "3.50$",
    image: espresso,
  },
  {
    id: 2,
    category: "Espresso",
    name: "Americano",
    desc: "Double shot with hot water.",
    price: "4.50$",
    image: americano,
  },
  {
    id: 3,
    category: "Espresso",
    name: "Latte",
    desc: "Double shot with steamed milk.",
    price: "5.50$",
    image: latte,
  },
  {
    id: 4,
    category: "Espresso",
    name: "Flat White",
    desc: "Strong coffee with smooth milk.",
    price: "5.50$",
    image: flatWhite,
  },
  {
    id: 5,
    category: "Espresso",
    name: "Cappuccino",
    desc: "Espresso, milk and foam.",
    price: "5.00$",
    image: cappuccino,
  },
  {
    id: 6,
    category: "Espresso",
    name: "Cortado",
    desc: "Espresso and warm milk, no foam.",
    price: "5.00$",
    image: cortado,
  },
  {
    id: 7,
    category: "Cold Drinks",
    name: "Cold Brew",
    desc: "Made slowly for 18 hours.",
    price: "6.00$",
    image: coldBrew,
  },
  {
    id: 8,
    category: "Cold Drinks",
    name: "Iced Latte",
    desc: "Double shot over ice with cold milk.",
    price: "6.00$",
    image: icedLatte,
  },
  {
    id: 9,
    category: "Cold Drinks",
    name: "Dark Chocolate Frappe",
    desc: "Blended with dark chocolate and cream.",
    price: "7.50$",
    image: frappe,
  },
  {
    id: 10,
    category: "Cold Drinks",
    name: "Iced Americano",
    desc: "Double shot poured over ice.",
    price: "5.50$",
    image: icedAmericano,
  },
  {
    id: 11,
    category: "Pastries",
    name: "Butter Croissant",
    desc: "Baked fresh every morning.",
    price: "3.50$",
    image: croissant,
  },
  {
    id: 12,
    category: "Pastries",
    name: "Pain au Chocolat",
    desc: "Pastry with dark chocolate inside.",
    price: "4.00$",
    image: painAuChocolat,
  },
  {
    id: 13,
    category: "Pastries",
    name: "Almond Tart",
    desc: "Crispy tart with almond cream.",
    price: "7.50$",
    image: almondTart,
  },
  {
    id: 14,
    category: "Pastries",
    name: "Cinnamon Roll",
    desc: "Soft roll with a sweet glaze.",
    price: "7.50$",
    image: cinnamonRolls,
  },
];

const Menu = () => {
  // which category is picked: 'All', 'Espresso', 'Cold Drinks' or 'Pastries'
  const [category, setCategory] = useState("All");

  const shownItems = items.filter(
    (item) => category === "All" || item.category === category,
  );

  return (
    <div className="page">
      <h1 className="page-title">Our Menu</h1>
      <p className="page-text">
        Coffee, cold drinks and pastries, made fresh every day.<br></br>Pick a
        category to filter the menu.
      </p>

      <div className="filter-buttons">
        <button
          className={category === "All" ? "active" : ""}
          onClick={() => setCategory("All")}
        >
          All
        </button>
        <button
          className={category === "Espresso" ? "active" : ""}
          onClick={() => setCategory("Espresso")}
        >
          Espresso
        </button>
        <button
          className={category === "Cold Drinks" ? "active" : ""}
          onClick={() => setCategory("Cold Drinks")}
        >
          Cold Drinks
        </button>
        <button
          className={category === "Pastries" ? "active" : ""}
          onClick={() => setCategory("Pastries")}
        >
          Pastries
        </button>
      </div>

      {shownItems.map((item) => (
        <div className="box menu-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="menu-item-text">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
          <p className="menu-price">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
