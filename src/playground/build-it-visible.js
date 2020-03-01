"use strict";
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.actionToggle = this.actionToggle.bind(this);
    this.state = {
      visibility: false
    };
  }

  actionToggle() {
    // alert("c");
    this.setState(previousState => {
      return {
        visibility: !previousState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.actionToggle}>
          {this.state.visibility ? "Hide Details" : "Show details"}
        </button>
        {this.state.visibility && <p>This is my paragraph</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
