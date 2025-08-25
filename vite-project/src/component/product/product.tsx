import React from "react";
import "./product.css";
import { BancCart, BancCart2 } from "../BancCart/BancCart";
import { Bay } from "../Bay/Bay";

export class ProductJoin extends React.Component {
  render() {
    return (
      <section className="purchases-container">
        <div>
          <Bay />
        </div>
        <BancCart />
        <BancCart2 />
      </section>
    );
  }
}
