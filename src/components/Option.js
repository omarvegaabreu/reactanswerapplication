import React from "react";

const Option = props => (
  <div>
    <div className="option" >
      <p className="option__text">{props.optionCount}.{props.optionText}</p>
      <button
        className=" button button--link"
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
