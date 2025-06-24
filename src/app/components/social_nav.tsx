import React from "react";
import "../page.css";
import SocialCard from "./social_card";

export default function SocialNavigation() {
  return (
    <div
      className="social_nav_container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="social_nav_row"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <SocialCard
          icon="social_icons/github.svg"
          link="https://github.com/colinhehn"
          link_text="github.com"
          header="Software"
          body="Programming projects, open-source work, and the code for this site!"
        />
        <SocialCard
          icon="social_icons/spotify.svg"
          link="https://open.spotify.com/artist/2i6NifU37fwneHjyH2kuQD?si=W49CWLrFQvCM-P3rEFZ7Hg"
          link_text="spotify.com"
          header="Perseids"
          body="I write music! Electronic, disco, folk, and whatever else comes out of FL Studio."
        />
      </div>
      <div
        className="social_nav_row"
        style={{ display: "flex", flexDirection: "row" }}
      >
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
          body="Professional experience, education, and career info. Let's get in touch!"
        />
        <SocialCard
          icon="social_icons/instagram.svg"
          link="https://www.instagram.com/colinhehn/"
          link_text="instagram.com"
          header="Personal"
          body="My D2D, photography, short-form content, and new music promos."
        />
      </div>
    </div>
  );
}
