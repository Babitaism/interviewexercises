import React from "react";
import Child from "./Child";

function Parent() {
  const [value, setValue] = React.useState(1);

  function updatechange(updatedvalue) {
    console.log(updatedvalue, "value");
    setValue(updatedvalue);
  }

  return (
    <>
      <input value={value}></input>
      <Child value={value} change={updatechange} />
    </>
  );
}

export default Parent;
