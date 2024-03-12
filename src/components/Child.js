import React from "react";

export default function Child(props) {
  const [count, setCount] = React.useState(props.value);
  const inputElem = React.useRef();

  function increasecount() {
  let  counter = count + 1;
    setCount(counter);
    props.change(counter)
  }

  return (
    <>
      <div className="header">
        <h1>Iam header</h1>
      </div>
      <button onClick={increasecount}>Count</button>
    </>
  );
}
