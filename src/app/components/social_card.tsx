import React from "react";
import "../page.css";

export default function SocialCard(props: {
  icon: string;
  link: string;
  link_text: string;
  header: string;
  body: string;
}) {
  return (
    <a href={props.link} target="_blank">
      <div className="social_card">
        <div className="header_group">
          <img src={props.icon} className="social_icon" />
          <div className="card_header_text">
            <h1>{props.header}</h1>
            <div>
              <img src="new_site.svg" className="new_site_icon" />
              <p className="card_subtitle">{props.link_text}</p>
            </div>
          </div>
        </div>
        <p className="card_body">{props.body}</p>
      </div>
    </a>
  );
}
