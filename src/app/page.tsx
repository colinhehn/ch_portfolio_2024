import React from "react";
import "./page.css";
import Typed_Title from "./components/typed_title";
import SocialNavigation from "./components/social_nav";

export default function Home() {
  return (
    <div>
      <main>
        <img src="withthewater.jpg" className="headshot_main"></img>
        <Typed_Title />
        <p className="main_subtitle">
          {"I'm Colin, an artist and engineer from Chicago."}
        </p>
        <SocialNavigation />
        <p className="copyright">&copy; 2025 Colin Hehn</p>
      </main>
    </div>
  );
}
