import React from "react";

const Action = props => (
  <div>
    <button onClick={props.handleRandomPick} disabled={!props.hasOptions}>
      What should I do
    </button>
  </div>
);

export default Action;
