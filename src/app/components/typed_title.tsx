"use client";

import React from "react";
import Typed from "typed.js";

export default function Typed_Title() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hej der!",
        "Hola!",
        "你好!",
        "Guten tag!",
        "Bonjour!",
        "안녕하세요!",
        "Ciao!",
        "Olá!",
        "Привет!",
      ],
      typeSpeed: 60,
      backSpeed: 70,
      backDelay: 700,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span
        className="poppins-bold"
        ref={el}
        style={{
          fontSize: "38px",
          fontStyle: "normal",
          fontFamily: "Poppins, sans-serif",
        }}
      />
    </div>
  );
}
