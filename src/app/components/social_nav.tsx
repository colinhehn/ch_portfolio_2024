import React from "react";
import "../page.css";
import "../globals.css";

export default function SocialNavigation() {
  return (
    <div className="social_button_navigation">
      <a href="https://www.youtube.com/@colinhehn" target="_blank">
        <img src="youtube.svg" className="social_button"></img>
      </a>
      <a href="https://www.instagram.com/colinhehn/" target="_blank">
        <img src="instagram.svg" className="social_button"></img>
      </a>
      <a href="https://github.com/colinhehn" target="_blank">
        <img src="github.svg" className="social_button"></img>
      </a>
      <a href="https://www.linkedin.com/in/colinhehn/" target="_blank">
        <img src="linkedin.svg" className="social_button"></img>
      </a>
    </div>
  );
}
