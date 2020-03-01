"use strict";
class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: props.count
    };
  }
  //button methods
  addOne() {
    this.setState(previousState => {
      return {
        count: previousState.count + 1
      };
    });
  }

  removeOne() {
    this.setState(previousState => {
      return {
        count: previousState.count - 1
      };
    });
  }

  reset() {
    this.setState(previousState => {
      return {
        count: (previousState.count = 0)
      };
    });
  }

  //application

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.removeOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

CounterApp.defaultProps = {
  count: 0
};

ReactDOM.render(<CounterApp />, document.getElementById("app"));
