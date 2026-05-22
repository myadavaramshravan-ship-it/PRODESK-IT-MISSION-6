import React from "react";

import bg from "../assets/bg.png";

export default function Home() {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="overlay">
        <h2>Welcome </h2>
        <h1>To  <span class="orange">ShopZone</span></h1>
        <p>
          Discover Amazing Products
        </p>

      </div>
    </div>
  );
}