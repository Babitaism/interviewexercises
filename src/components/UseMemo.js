import React, { useEffect, useMemo, useRef } from "react";

export default function UseMemo() {
  const [value, setValue] = React.useState(2);

  function calculate(value) {
    return value * 4;
  }

  const memoizedVal = useMemo(() => calculate(value), []);

  useEffect(() => {
    if (value == 5) {
      return;
    }
    setValue(value + 1);
    // calculate(value);
  });

  return (
    <>
      Grade:{value}
      <br></br>
      Current Value :{memoizedVal}
    </>
  );
}

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = useMemo(() => numbers.map((n)=>{
//   console.log('-----------')
//   return n*2
// }), []);
// return (
//   <div>
//     {doubledNumbers.map((number,index) => (
//       <p key={index}>{number}</p>
//     ))}
//   </div>
// );
