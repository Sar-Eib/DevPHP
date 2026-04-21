import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">

      <div className="overlay">

        <div className="banner">
          <h1>Om Os</h1>
          <h1>Resell af film, spil, Cd og LP 🎬🎮</h1>
        </div>

        <div className="card-container">

          <div className="card">
            <h2>Hvem er vi?</h2>
            <p>
              Vi er en webshop der sælger brugte film, spil, Cd og LP.
              Vi gør det billigere og mere bæredygtigt.
            </p>
          </div>

          <div className="card">
            <h2>Vores mission</h2>
            <p>
              At give nyt liv til produkter og gøre det nemt
              at finde gode deals.
            </p>
          </div>

          <div className="card">
            <h2>Hvorfor vælge os?</h2>
            <p>
              ✔ Billige priser <br />
              ✔ Hurtig levering <br />
              ✔ Kvalitetstjek
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;
