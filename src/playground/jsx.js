"use strict";

console.log("App.js is running!");

const appRoot = document.getElementById("app");

const app = {
  title: " This is my title",
  subtitle: " This is my subtitle",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const options = e.target.elements.options.value;

  if (options) {
    app.options.push(options);
    e.target.elements.options.value = "";
    renderApp();
  }
  console.log(app.options.length);
};

const removeAll = () => {
  app.options = [];
  renderApp();
};

const disableDecisionButton = e => {
  console.log(e);
};

const makeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const random = app.options[randomNumber];
  alert(`RANDOM NUMBER GENERATOR ${random}`);
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>What should I do</h1>
      <p>add your pending things and do</p>
      {app.options.length > 0 ? "Here are your options" : "Other options"}
      <button disabled={app.options.length === 0} onClick={makeDecision}>
        What should I do
      </button>
      <button disabled={app.options.length === 0} onClick={removeAll}>
        Remove all
      </button>
      <ol>
        {app.options.map(option => (
          <li key={option}> {option} </li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="options"></input>
        <button>Add Option</button>
      </form>
    </div>
  );

  // @ts-ignore
  ReactDOM.render(template, appRoot);
};

renderApp();
