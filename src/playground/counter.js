"use strict";
class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount(previousProps, previousState) {
    const json = localStorage.getItem("count");
    const countString = JSON.parse(json);
    const count = parseInt(countString, 10);

    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }
  componentDidUpdate(previousProps, previousState) {
    if (previousState.count.length !== this.setState.length) {
      const json = JSON.stringify(this.state.count);
      localStorage.setItem("count", json);
    }
  }

  //button methods
  addOne() {
    this.setState(previousState => ({ count: previousState.count + 1 }));
  }

  removeOne() {
    this.setState(previousState => ({ count: previousState.count - 1 }));
  }

  reset() {
    this.setState(previousState => ({ count: (previousState.count = 0) }));
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

ReactDOM.render(<CounterApp />, document.getElementById("app"));
