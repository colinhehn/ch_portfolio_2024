import React from "react";
import "./globals.css";
import "./page.css";
import Typed_Title from "./components/typed_title";
import SocialNavigation from "./components/social_nav";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <Typed_Title />
        <p className="main_subtitle">
          {"I'm Colin, and here's a collection of my work."}
        </p>
        <nav>
          <Link href="/aboutme">
            <div className="nav_button">About Me</div>
          </Link>
          <Link href="/software">
            <div className="nav_button">Software</div>
          </Link>
          <Link href="/music">
            <div className="nav_button">Music</div>
          </Link>
        </nav>
        <img src="withthewater.jpg" className="headshot_main"></img>
        <SocialNavigation />
        <p>&copy; 2025 Colin Hehn</p>
      </main>
    </div>
  );
}
