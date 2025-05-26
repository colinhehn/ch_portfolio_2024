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
          link_text="github.com"
          header="Software"
          body="Programming projects, open-source work, and the code for this site!"
        />
        <SocialCard
          icon="social_icons/spotify.svg"
          link="https://spotify.com/"
          link_text="spotify.com"
          header="Perseids"
          body="I write music! Electronic, disco, folk, and whatever else comes out of FL Studio."
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SocialCard
          icon="social_icons/youtube.svg"
          link="https://www.youtube.com/@colinhehn"
          link_text="youtube.com"
          header="Videos"
          body="Long-form content, video essays, and other things I like talking about."
        />
        <SocialCard
          icon="social_icons/linkedin.svg"
          link="https://www.linkedin.com/in/colinhehn/"
          link_text="linkedin.com"
          header="Career"
          body="Professional experience, education, and career info. Let’s get in touch!"
        />
        <SocialCard
          icon="social_icons/instagram.svg"
          link="https://www.instagram.com/colinhehn/"
          link_text="instagram.com"
          header="Personal"
          body="My D2D, “photography,” short-form content, and new music promos."
        />
      </div>
    </div>
  );
}
