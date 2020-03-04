import React from "react";

const Header = props => (
  <div>
    <h1>{props.title}</h1>
    {props.subTitle && <p>{props.subTitle}</p>}
  </div>
);

Header.defaultProps = {
  title: "Where do you want to eat?"
};

export default Header;
