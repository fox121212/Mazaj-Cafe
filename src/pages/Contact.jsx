import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    // stop the page from reloading
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="page">
      <h1 className="page-title">Get in Touch</h1>
      <p className="page-text">
        Have a question or want to book a table? Send us a message.
      </p>

      <div className="box contact-info">
        <p>
          <b>Address:</b> 123 Brew Street, Beirut, Lebanon
        </p>
        <p>
          <b>Hours:</b> Every day, 7:00 AM to 10:00 PM
        </p>
        <p>
          <b>Email:</b> hello@coffeecafe.com
        </p>
        <p>
          <b>Phone:</b> +961 1 234 567
        </p>
      </div>

      <div className="box">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
      </div>

      {sent && (
        <div className="box thank-you">
          <p>Thank you {name}, we got your message and will reply soon.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
