import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget-header" >
      <h3 className="widget-header--title" >These are your restaurant options</h3>
      <button

        className="button--link"
        onClick={props.handleRemoveAll}
      >
        Remove all
    </button>
    </div>


    {props.options.length === 0 && <p>Add your options</p>}

    {props.options.map(option => (

      <Option

        key={option}
        optionText={option}
        handelDeleteOption={props.handelDeleteOption}

      />

    ))}
  </div>
);

export default Options;
