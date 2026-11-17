import React from "react";
import coffeeFarm from "../images/coffeeFarm.jpg";
import "../styles/About.css";

// what we care about
const values = [
  {
    id: 1,
    title: "Good beans",
    text: "We buy straight from farmers, so we know where every bean comes from.",
  },
  {
    id: 2,
    title: "Fresh roast",
    text: "We roast small batches every week so the coffee is always fresh.",
  },
  {
    id: 3,
    title: "Made with care",
    text: "Every cup is made carefully behind our bar.",
  },
  {
    id: 4,
    title: "Community",
    text: "A place where people can slow down and feel at home.",
  },
];

// the people who work here

const About = () => {
  return (
    <div className="page">
      <h1 className="page-title">Our Story</h1>
      <p className="page-text">Started in Beirut in 2020.</p>

      <div className="box about-story">
        <img src={coffeeFarm} alt="A coffee farm" />
        <div>
          <h2>How it started</h2>
          <p>
            What started as a small corner in the city became a home for people
            who love coffee. We opened in 2020 with one idea: every cup should
            be made with care.
          </p>
          <p>
            We get our beans from farms in Ethiopia, Colombia and Guatemala, and
            we know the farmers who grow them.
          </p>
        </div>
      </div>

      <h2 className="section-title">What we care about</h2>
      <div className="about-values">
        {values.map((value) => (
          <div className="box" key={value.id}>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
