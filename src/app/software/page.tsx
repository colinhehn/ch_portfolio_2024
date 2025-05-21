import React from "react";
import "../../app/globals.css";
import "./software.css";
import SocialNavigation from "../components/social_nav";
import BackButton from "../components/back_button";

export default function Software() {
  return (
    <div className="about-container">
      <main>
        <div className="about-header">
          <BackButton />
          <h1 className="about-title">Software</h1>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              What got me into writing code in the first place was making
              Minecraft mods back in eighth grade. Now, ten years later I’m
              writing logic for backends serving thousands of users!
            </p>
            <p>
              During my first year at university, I worked in a medical research
              lab doing database admin work before spending three summers at
              Google in San Francisco. Yes, I learned lots of their internal
              tooling, but also lots of soft-skills in backend! Most of my
              professional time has been building out ML model demoing tools,
              API endpoints, and alerting systems for data pipelines.
            </p>
            <p>
              On the side you’ll catch me learning obsolete web frameworks,
              building for mobile (time to learn Lynx?), and finding UX design
              work wherever I can!
            </p>
          </div>
          <img
            src="/software-image.jpg"
            alt="Software"
            className="about-image"
          />
        </div>

        <SocialNavigation />
        <p>&copy; 2025 Colin Hehn</p>
      </main>
    </div>
  );
}
