import React from "react";
import Link from "next/link";
import nav from "./page.module.css";

export default function Home() {
  return (
    <div>
      <ul className={nav.home}>
        <li>
          <Link href="">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
