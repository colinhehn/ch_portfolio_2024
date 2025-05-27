import React from "react";
import "../page.css";

export default function ResumeCTA() {
  return (
    <div>
      <a href="/colinhehn_resume.pdf" target="_blank">
        <div className="resume_cta">
          <img src="file_download.svg" className="file_download_icon" />
          <p className="resume_cta_text">Take a look at my resume!</p>
        </div>
      </a>
    </div>
  );
}
