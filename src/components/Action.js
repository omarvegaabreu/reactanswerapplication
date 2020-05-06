"use strict";

import React from "react";

const Action = props => (
  <div>
    <button
      className="big-button"
      onClick={props.handleRandomPick}
      disabled={!props.hasOptions}
    >
      What should I Eat
    </button>
  </div>
);

export default Action;
