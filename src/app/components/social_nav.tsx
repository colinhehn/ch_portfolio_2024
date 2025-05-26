import React from "react";
import "../page.css";
import SocialCard from "./social_card";

export default function SocialNavigation() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SocialCard
          icon="social_icons/github.svg"
          link="https://github.com/colinhehn"
          link_text="github.com/colinhehn"
          header="GitHub"
          body="Check out my code and projects!"
        />
        <SocialCard
          icon="social_icons/spotify.svg"
          link="https://spotify.com/"
          link_text="spotify.com"
          header="Spotify"
          body="Check out my music!"
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SocialCard
          icon="social_icons/youtube.svg"
          link="https://www.youtube.com/@colinhehn"
          link_text="youtube.com/@colinhehn"
          header="YouTube"
          body="Check out my music and videos!"
        />
        <SocialCard
          icon="social_icons/linkedin.svg"
          link="https://www.linkedin.com/in/colinhehn/"
          link_text="linkedin.com/in/colinhehn"
          header="LinkedIn"
          body="Connect with me professionally!"
        />
        <SocialCard
          icon="social_icons/instagram.svg"
          link="https://www.instagram.com/colinhehn/"
          link_text="instagram.com/colinhehn"
          header="Instagram"
          body="Check out my photos and posts!"
        />
      </div>
    </div>
  );
}
