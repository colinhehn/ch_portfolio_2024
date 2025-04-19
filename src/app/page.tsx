import React from "react";
import "./globals.css";
import "./page.css";
import Typed_Title from "./typed_title";

export default function Home() {
  return (
    <div>
      <main>
        <Typed_Title />
        <p className="main_subtitle">
          I'm Colin, and here's a collection of my work.
        </p>
        <nav>
          <a href="./about">
            <div className="nav_button">About</div>
          </a>
          <a href="./projects">
            <div className="nav_button">Projects</div>
          </a>
        </nav>
        <img src="withthewater.jpg" className="headshot_main"></img>
        <div className="social_button_navigation">
          <a href="https://github.com/colinhehn" target="_blank">
            <img src="github-brands.svg" className="social_button"></img>
          </a>
          <a href="https://www.linkedin.com/in/colinhehn/" target="_blank">
            <img src="linkedin-brands.svg" className="social_button"></img>
          </a>
        </div>
        <p>&copy; 2025 Colin Hehn</p>
      </main>
    </div>
  );
}
