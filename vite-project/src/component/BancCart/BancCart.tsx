import React from "react";
import "./BancCart.css";
import "./BancCart2.css";

export class BancCart extends React.Component {
  render() {
    return (
      <div className="banc-cart-container">
        <div className="master-cart">MIR</div>
        <h3 className="title-cart">BBB</h3>
        <h3 className="title-cart">**** **** **** 1921</h3>
        <div className="bancCart-mas-container">
          <div className="bancCart-mas">
            <span className="span-mas">Expire date</span>
            <span className="span-mas"> 12/31</span>
          </div>
          <span className="span-mas-2"> SberBanc</span>
        </div>
      </div>
    );
  }
}

export class BancCart2 extends React.Component {
  render() {
    return (
      <div className="banc-cart-container2">
        <div className="master-cart2">MIR</div>
        <h3 className="title-cart2">BBA</h3>
        <h3 className="title-cart2">**** **** **** 2817</h3>
        <div className="bancCart-mas-container2">
          <div className="bancCart-mas2">
            <span className="span-mas2">Expire date</span>
            <span className="span-mas2"> 07/33</span>
          </div>
          <span className="span-mas-22"> T</span>
        </div>
      </div>
    );
  }
}
