import React, { useEffect, useState, useRef } from "react";
import Input from "./UseRefFocus";

export default function Temp() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitRef = useRef(null);

  function firstName(e) {
    if (e.key == "Enter") {
      lastNameRef.current.focus();
    }
  }

  function lastName(e) {
    if (e.key == "Enter") {
      submitRef.current.focus();
    }
  }

  function submit() {
    alert("Submitted");
  }

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  return (
    <>
      <Input
        type="text"
        ref={firstNameRef}
        onKeyDown={firstName}
        placeholder="Enter First Name"
      ></Input>
      <Input
        type="text"
        ref={lastNameRef}
        onKeyDown={lastName}
        placeholder="Enter Last Name"
      ></Input>
      <button ref={submitRef} onKeyDown={submit}>
        Submit
      </button>
    </>
  );
}
