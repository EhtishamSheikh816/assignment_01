// pages/about.tsx
import React from "react";
import beaut from "./about.module.css";

function Aboutpage() {
  return (
    <div>
      <h1 className={beaut.heading}>About Page</h1>
      <p className={beaut.paragraph}>It's about page</p>
    </div>
  );
}
export default Aboutpage;
