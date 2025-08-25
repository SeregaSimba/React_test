import React from "react";
import "../../src/pages/main.css";
import { Menu } from "../component/Menu/Menu";
import { Header } from "../component/header/header";
import { Content } from "../component/content/content";

export class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Menu />
        <div className="main-content">
          <Header />
          <Content />
        </div>
      </div>
    );
  }
}
