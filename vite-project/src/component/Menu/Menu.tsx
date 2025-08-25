import React from "react";
import "./Menu.css";
// import viteLogo from "/vite.svg";
// import reactLogo from "../../assets/react.svg";

export class Menu extends React.Component {
  onItemMenuClick() {
    console.log("test Home");
  }

  render() {
    return (
      <div className="menu-container">
        <div className="menu-items">
          <div className="menu-item">Home</div>
          <div className="menu-item">Cart</div>
          <div className="menu-item">Stat</div>
        </div>
        <div className="menu-item">Exit</div>
      </div>
    );
  }
}
