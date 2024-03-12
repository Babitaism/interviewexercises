import React from "react";

export default function CreateFragment() {
  function OwnFragment(props) {
    return props.children;
  }

  return (
    <OwnFragment>
      <h1>Hi</h1>
    </OwnFragment>
  );
}
