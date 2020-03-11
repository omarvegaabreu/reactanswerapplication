import React from "react";

const Option = props => (
  <div>
    <div>
      {props.optionText}
      <button
        className="button--link"
        onClick={e => {
          props.handelDeleteOption(props.optionText);
        }}
      >
        Delete
      </button>
    </div>
  </div>
);

export default Option;
