import React from "react";
import "../../app/globals.css";
import "./music.css";
import SocialNavigation from "../components/social_nav";

export default function Music() {
  return (
    <div className="about-container">
      <main>
        <h1 className="about-title">Music</h1>
        <div className="about-content">
          <div className="about-text">
            <p>
              ive been playing guitar, drums, and piano for a minute. would just
              make beats with my friends and cover metal songs.
            </p>
            <p>
              finally got onto FL studio! began with a lofi project → could add
              links to that
            </p>
            <p>
              the big evolution to perseids → when i really wanted to take a
              shot at making something that’s really my own, and/or tells my
              story, conveys the feeling that a bunch of music has given me up
              to this point. (can go more in depth on toyow, etc.) → then add
              links to all perseids handles
            </p>
            <p>wanna see what im working on? → soundcloud link</p>
          </div>
          <img src="/music-image.jpg" alt="Music" className="about-image" />
        </div>

        <SocialNavigation />
        <p>&copy; 2025 Colin Hehn</p>
      </main>
    </div>
  );
}
