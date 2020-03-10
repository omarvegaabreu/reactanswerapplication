import React from "react";

const Option = props => (
  <div>
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.handelDeleteOption(props.optionText);
        }}
      >
        Delete Option
      </button>
    </div>
  </div>
);

export default Option;
