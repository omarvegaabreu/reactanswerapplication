//libraries
import React from "react";

//components imports
import AddOption from "./Addoptions";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

export default class App extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handelDeleteOption = optionToRemove => {
    this.setState(previousState => ({
      options: previousState.options.filter(option => optionToRemove !== option)
    }));
  };

  handleAddOption = option => {
    //to check if option has a value
    if (!option) {
      return "I don't think you are hungry. You didn't add anything.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "You have already chosen that place";
    }
    this.setState(previousState => ({
      options: previousState.options.concat(option)
    }));
  };

  handleDeleteModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleRandomPick = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const random = this.state.options[randomNumber];
    this.setState(() => ({ selectedOption: random }));
  };

  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }));
  };

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
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    const subTitle = "Write your options and click for magic";

    return (
      <div>
        <Header className="container" subTitle={subTitle} />
        <div className="container" >
          <Action
            hasOptions={this.state.options}
            handleRandomPick={this.handleRandomPick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleRemoveAll={this.handleRemoveAll}
              handelDeleteOption={this.handelDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleDeleteModal={this.handleDeleteModal}
        />
      </div>
    );
  }
}
