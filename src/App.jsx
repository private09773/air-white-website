import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>AIR WHITE</h2>

        <div className="navLinks">
          <a href="/">Home</a>
          <a href="/">Our Team</a>
        </div>
      </nav>

      <section className="hero">
        <div className="overlay"></div>

        <div className="heroContent">
          <h1>Air White</h1>

          <p className="tag">
            Soar Together. Fly Further.
          </p>

          <div className="smallLine"></div>

          <p className="desc">
            Air White was originally founded on November 26 of 2025
            by private09773 and Ry who was the original co-founder
            of Air White.
          </p>

          <button>Learn More</button>
        </div>
      </section>

      <section className="infoCards">
        <div className="card">
          <div className="icon">👥</div>

          <h3>Community Driven</h3>

          <p>
            A passionate community brought together by aviation.
          </p>
        </div>

        <div className="card">
          <div className="icon">✈️</div>

          <h3>Virtual Aviation</h3>

          <p>
            Realistic and immersive flight experiences.
          </p>
        </div>

        <div className="card">
          <div className="icon">🛡️</div>

          <h3>Professionalism</h3>

          <p>
            Committed to providing a safe and respectful environment.
          </p>
        </div>
      </section>

      <footer>
        <p>© 2026 Air White. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;