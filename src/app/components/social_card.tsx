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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img src={props.icon} className="social_icon" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: "10px",
              marginLeft: "3px",
            }}
          >
            <h1 className="card_header" style={{ marginBottom: "-12px" }}>
              {props.header}
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
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
