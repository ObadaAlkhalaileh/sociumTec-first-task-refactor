import React from "react";
import "components/Poster/poster.css";

const bg = require("bg.jpg")

export default function Poster() {
  return (
    <div id="poster">
      <img src={bg} alt="bg" />
    </div>
  );
}
