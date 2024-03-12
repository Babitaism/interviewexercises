import react, { useState, useEffect } from "react";

function Display() {
  const [item1, setItem1] = useState(1);
  const [item2, setItem2] = useState(0.012);

  const enterinput = (e) => {
    let val = e.target.value;
    setItem1(val);
    let calculatedValue = val * 0.012;
    setItem2(calculatedValue.toFixed(3));
  };

  return (
    <>
      <br></br>
      <input
        type="number"
        value={item1}
        placeholder="Enter amount in INR"
        onChange={enterinput}
      ></input>
      <br></br>
      <br></br>
      <input type="number" value={item2}></input>
    </>
  );
}

export default Display;
