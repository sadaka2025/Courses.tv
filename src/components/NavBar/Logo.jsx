import React from "react";
import "./logo.css"; // le CSS du logo

export default function Logo() {
  return (
    <header className="full-on-css" role="banner">
      <h1 className="brand-name">
        Yacob <span>Student</span>
      </h1>

      <p className="slogan" aria-label="frontend, tips, tricks">
        Sirah <span aria-hidden="true">|</span> Nour{" "}
        <span aria-hidden="true">|</span> Yaqin
      </p>
    </header>
  );
}
