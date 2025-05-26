import React from "react";
import "./globals.css";
import "./page.css";
import Typed_Title from "./components/typed_title";
import SocialNavigation from "./components/social_nav";

export default function Home() {
  return (
    <div>
      <main>
        <Typed_Title />
        <p className="main_subtitle">
          {"I'm Colin, a developer and musician from Chicago."}
        </p>
        <img src="withthewater.jpg" className="headshot_main"></img>
        <SocialNavigation />
        <p>&copy; 2025 Colin Hehn</p>
      </main>
    </div>
  );
}
