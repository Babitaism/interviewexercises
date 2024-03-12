import React, { useEffect, useState, useRef } from "react";

export default function UseEff() {
  const [index, setIndex] = React.useState(0);
  let array = ["bab", "Ash", "Rishi", "Rishu"];

  useEffect(() => {
    console.log("useefect called");

    if (index === array.length - 1) {
      return;
    }

    setTimeout(() => {
      setIndex(index + 1);
    }, 2000);
  }, [index]);

  console.log(index, "index");

  return <>Hi {array[index]}</>;


}
