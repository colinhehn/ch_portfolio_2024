import React from "react";
import "../page.css";
import "../globals.css";

export default function BackButton() {
  return (
    <div className="back_button_container">
      <a href="/">
        <img src="back.svg" className="back_button"></img>
      </a>
    </div>
  );
}
