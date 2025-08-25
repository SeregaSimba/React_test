import React from "react";
import "./Treid.css";

export class Treid extends React.Component {
  state = {
    count: 0,
    isAdded: false,
  };

  toggleIsAdded = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isAdded: !prevState.isAdded,
        count: prevState.count + 1,
      };
    });
  };

  render() {
    const { price = "0.99", cartName = "Книга" } = this.props;

    const stateStyle = this.state.isAdded
      ? "treid-container"
      : "Cart-none-treid";

    return (
      <div className={stateStyle} onClick={this.toggleIsAdded}>
        <div>{this.state.count}</div>
        <div className="price-text">{price}</div>
        <div className="price-name">{cartName}</div>
      </div>
    );
  }
}
