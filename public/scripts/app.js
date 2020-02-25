"use strict";

console.log("App.js is running!");
var appRoot = document.getElementById("app");

var app = {
  title: " This is my title",
  subtitle: " This is my subtitle",
  option: ["One", "Two"]
};

var user = {
  name: "Omar Vega",
  age: 38,
  location: "Miami,FL"
};
var userLocation = function userLocation(location) {
  return location ? React.createElement(
    "p",
    null,
    "Location: ",
    location
  ) : undefined;
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  userLocation(user.location)
);

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "React answers"
  ),
  React.createElement(
    "p",
    null,
    "this is the app"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Title:",
      app.title
    ),
    React.createElement(
      "li",
      null,
      "Subtitle:",
      app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
      ),
      app.option.length > 0 ? "Here are your options" : "Other options"
    )
  )
);

ReactDOM.render(template, appRoot);
