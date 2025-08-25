import React from "react";

export function On1() {
  return (
    <>
      <article>
        <Child>
          <p>Hello a em child 1</p>
          <p>Hello a em child 2</p>
          <p>Hello a em child 3</p>
        </Child>
      </article>
    </>
  );
}

function Child(props) {
  return (
    <>
      <div>{React.Children.count(props.children)}</div>
      {props.children}
    </>
  );
}
