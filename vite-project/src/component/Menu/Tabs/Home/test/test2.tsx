import React from "react";

export function On1() {
  return (
    <>
      <article>
        <Child>
          <p>Hello a em child 1</p>
          <p>Hello a em child 2</p>
          <TegP />
          <p>Hello a em child 3</p>
        </Child>
      </article>
    </>
  );
}

function Child(props) {
  const IClild = React.Children.map(props.children, (child, i) => {
    return (
      <div>
        this is index {i} this is child {child}
        {i}
      </div>
    );
  });
  return (
    <>
      <div>{React.Children.count(props.children)}</div>
      {props.children}
      <>{IClild}</>
    </>
  );
}

function TegP() {
  return (
    <div>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
    </div>
  );
}
