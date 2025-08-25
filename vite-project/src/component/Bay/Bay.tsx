import React from "react";
import "./Bay.css";

export class Bay extends React.Component {
  render() {
    return (
      <div className="bay-container">
        <div className="bay-text-container">
          <div className="text-buy">Buy</div>
        </div>

        <div className="buy-product-name">
          <span>Name</span>
          <span>Category</span>
        </div>
        <div className="buy-money">
          <p>-$:123</p>
        </div>
      </div>
    );
  }
}
