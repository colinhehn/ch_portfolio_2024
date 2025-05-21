import React from "react";
import "../../app/globals.css";
import "./music.css";

export default function Music() {
  return (
    <div className="about-container">
      <main>
        <h1 className="about-title">Music</h1>
        <div className="about-content">
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
              auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
              nulla enim. Phasellus molestie magna non est bibendum non
              venenatis nisl tempor.
            </p>
            <p>
              Suspendisse in orci enim. Donec sed ligula in felis ultricies
              fermentum. Aliquam erat volutpat. Sed congue augue vitae neque.
              Fusce lorem ipsum, dignissim at augue ac, consequat rhoncus dui.
            </p>
          </div>
          <img src="/music-image.jpg" alt="Music" className="about-image" />
        </div>

        <div className="social-button-navigation">
          <a href="https://github.com/colinhehn" target="_blank">
            <img src="/github-brands.svg" className="social_button" />
          </a>
          <a href="https://www.linkedin.com/in/colinhehn/" target="_blank">
            <img src="/linkedin-brands.svg" className="social_button" />
          </a>
        </div>
        <p>&copy; 2025 Colin Hehn</p>
      </main>
    </div>
  );
}
