import React from "react";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <main>
        <p>I'm Colin, and here's a collection of my work.</p>
        <nav>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
        </nav>
        <img src="withthewater.jpg"></img>
        <div className="social_button_nav">
          <a href="https://github.com/colinhehn" target="_blank">
            <img src="github-brands.svg"></img>
          </a>
          <a href="https://www.linkedin.com/in/colinhehn/" target="_blank">
            <img src="linkedin-brands.svg"></img>
          </a>
        </div>
      </main>
      <footer>
        <p>&copy; 2025 Colin Hehn</p>
      </footer>
    </div>
  );
}
