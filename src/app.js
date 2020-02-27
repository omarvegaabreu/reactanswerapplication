"use strict";
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>New application</h1>
        <p>this will be a paragraph</p>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    const button = "this is my text";

    return (
      <div>
        <button>{button}</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>This is options</p>
      </div>
    );
  }
}

class AddOptions extends React.Component {
  render() {
    return (
      <div>
        <p>This is add options</p>
      </div>
    );
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOptions />
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
