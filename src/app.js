"use strict";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.randomPick = this.randomPick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: props.options
    };
  }

  handleAddOption(option) {
    //to check if option has a value
    if (!option) {
      return "I don't think you are hungry. You didn't add anything.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "You have already chosen that place";
    }
    this.setState(previousState => {
      return {
        options: previousState.options.concat(option)
      };
    });
  }

  randomPick() {
    this.setState(previousState => {
      const randomNumber = Math.floor(
        Math.random() * previousState.options.length
      );

      const random = previousState.options[randomNumber];
      return alert(random);
    });
  }

  handleRemoveAll() {
    console.log("clicked");
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  render() {
    const subTitle = "Write your options and click for magic";

    return (
      <div>
        <Header subTitle={subTitle} />
        <Action hasOptions={this.state.options} randomPick={this.randomPick} />
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

App.defaultProps = {
  options: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <p>{props.subTitle}</p>}
    </div>
  );
};

Header.defaultProps = {
  title: "Where do you want to eat?"
};

const Action = props => {
  const button = "What should I do";

  return (
    <div>
      <button
        onClick={props.randomPick}
        disabled={!props.hasOptions.length > 0}
      >
        {button}
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleRemoveAll}>Remove all</button>
      {props.options.map(option => {
        return <Option key={option} optionText={option} />;
      })}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      <div>{props.optionText}</div>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
