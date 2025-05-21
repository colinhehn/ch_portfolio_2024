import React from "react";
import "../../app/globals.css";
import "./aboutme.css";
import SocialNavigation from "../components/social_nav";
import BackButton from "../components/back_button";

export default function AboutMe() {
  return (
    <div className="about-container">
      <main>
        <div className="about-header">
          <BackButton />
          <h1 className="about-title">About Me</h1>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              hi i build software projects, play video games, make coffee, write
              music, and do athletic shitt!!
            </p>
            <p>second paragraph lol</p>
          </div>
          <img src="/about-image.jpg" alt="Profile" className="about-image" />
        </div>

        <SocialNavigation />
        <p>&copy; 2025 Colin Hehn</p>
      </main>
    </div>
  );
}
