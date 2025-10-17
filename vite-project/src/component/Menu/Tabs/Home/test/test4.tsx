import { useState, useEffect } from "react";
import React from "react";

export function Test4() {
  return (
    <>
      <AddEffect />
    </>
  );
}

function AddEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`счетчик был`);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <TestCompoint />
    </>
  );
}

class TestCompoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log(`это componentDidMount ${this.state.count}`);
  }

  componentDidUpdate() {
    console.log(`предыдущее состояние UI `);
    console.log(`это componentDidUpdate ${this.state.count} сщстояние после `);
  }
  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          {this.state.count}
        </button>
      </>
    );
  }
}
