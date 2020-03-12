import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget-header" >
      <h3 className="widget-header__title" >These are your restaurant options</h3>
      <button
        className="button--link"
        onClick={props.handleRemoveAll}
      >
        Remove all
    </button>
    </div>
    {props.options.length === 0 && <p className="widget__message" >Add your options</p>}

    {props.options.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        optionCount={index + 1}
        handelDeleteOption={props.handelDeleteOption}
      />
    ))}
  </div>
);

export default Options;
