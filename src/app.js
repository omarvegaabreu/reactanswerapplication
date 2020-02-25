"use strict";

console.log("App.js is running!");
var appRoot = document.getElementById("app");

const app = {
  title: " This is my title",
  subtitle: " This is my subtitle",
  option: ["One", "Two"]
};

const user = {
  name: "Omar Vega",
  age: 38,
  location: "Miami,FL"
};
const userLocation = location => {
  return location ? <p>Location: {location}</p> : undefined;
};
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {userLocation(user.location)}
  </div>
);

const template = (
  <div>
    <h1>React answers</h1>
    <p>this is the app</p>
    <ol>
      <li>Title:{app.title}</li>
      <li>
        Subtitle:
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.option.length > 0 ? "Here are your options" : "Other options"}
      </li>
    </ol>
  </div>
);

ReactDOM.render(template, appRoot);
