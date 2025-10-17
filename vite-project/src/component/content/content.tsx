import React from "react";
import "./content.css";
import { Shopping } from "../Menu/Tabs/Shoping/Shopping";
import { Home } from "../Menu/Tabs/Home/Home";

// import { useState } from "react";
// import { ProductJoin } from "../../component/product/product";
// import { Treid } from "../Treid/Treid";
// import { On1 } from "../Menu/Tabs/Home/test/test2";

// import { TestContext } from "../Menu/Tabs/Home/test/TestContext";

// import { Test3 } from "../Menu/Tabs/Home/test/test3";
// import { Test4 } from "../Menu/Tabs/Home/test/test4";
// import { Test5 } from "../Menu/Tabs/Home/test/Test5";
// import { TestMemo } from "../Menu/Tabs/Home/test/testMemo";
// import { InputTest } from "../Menu/Tabs/Home/test/InputTest";
// import { CompointReducer } from "../Menu/Tabs/Home/test/CompointReducer";
// import { CastomHuc } from "../Menu/Tabs/Home/test/castomHuc";
// import { MemoApp } from "../Menu/Tabs/Home/test/MemoTest";
// import { ContextUI } from "../Menu/Tabs/Home/test/ContextIU";
// import { ContentTest2 } from "../Menu/Tabs/Home/test/Test2Contecst";
import { ComponentContext } from "../Menu/Tabs/Home/test/Reducer2";

export class Content extends React.Component {
  state = {
    carts: [
      {
        price: "0.99",
        cartName: "Книга",
      },
      {
        price: "10.99",
        cartName: "Книга 13",
      },
      {
        price: "8.99",
        cartName: "Книга 8",
      },
    ],
  };

  addCart = () => {
    this.setState({
      carts: [...this.state.carts, { price: "0.09", cartName: "Книга 0" }],
    });
  };

  render() {
    return (
      <div className="content-container">
        <button onClick={this.addCart}>Test</button>
        <Shopping carts={this.state.carts} />
        <Home />
        <ComponentContext />
      </div>
    );
  }
}
