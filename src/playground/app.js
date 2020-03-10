"use strict";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.randomPick = this.randomPick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handelDeleteOption = this.handelDeleteOption.bind(this);

    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
    console.log("update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  handelDeleteOption(optionToRemove) {
    this.setState(previousState => ({
      options: previousState.options.filter(option => optionToRemove !== option)
    }));
  }

  handleAddOption(option) {
    //to check if option has a value
    if (!option) {
      return "I don't think you are hungry. You didn't add anything.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "You have already chosen that place";
    }
    this.setState(previousState => ({
      options: previousState.options.concat(option)
    }));
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
    this.setState(() => ({ options: [] }));
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
          handelDeleteOption={this.handelDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

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
      <button onClick={props.randomPick} disabled={!props.hasOptions}>
        {button}
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleRemoveAll}>Remove all</button>
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
};

const Option = props => {
  return (
    <div>
      <div>
        {props.optionText}

        <button
          onClick={e => {
            props.handelDeleteOption(props.optionText);
          }}
        >
          Delete option
        </button>
      </div>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = { error: undefined };
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
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
