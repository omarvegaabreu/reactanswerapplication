"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
    _this.randomPick = _this.randomPick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);

    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(App, [{
    key: "handleAddOption",
    value: function handleAddOption(option) {
      //to check if option has a value
      if (!option) {
        return "I don't think you are hungry. You didn't add anything.";
      } else if (this.state.options.indexOf(option) > -1) {
        return "You have already chosen that place";
      }
      this.setState(function (previousState) {
        return {
          options: previousState.options.concat(option)
        };
      });
    }
  }, {
    key: "randomPick",
    value: function randomPick() {
      this.setState(function (previousState) {
        var randomNumber = Math.floor(Math.random() * previousState.options.length);

        var random = previousState.options[randomNumber];
        return alert(random);
      });
    }
  }, {
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      console.log("clicked");
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subTitle = "Write your options and click for magic";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subTitle: subTitle }),
        React.createElement(Action, { hasOptions: this.state.options, randomPick: this.randomPick }),
        React.createElement(Options, {
          options: this.state.options,
          handleRemoveAll: this.handleRemoveAll
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return App;
}(React.Component);

App.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subTitle && React.createElement(
      "p",
      null,
      props.subTitle
    )
  );
};

Header.defaultProps = {
  title: "Where do you want to eat?"
};

var Action = function Action(props) {
  var button = "What should I do";

  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      {
        onClick: props.randomPick,
        disabled: !props.hasOptions.length > 0
      },
      button
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleRemoveAll },
      "Remove all"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, optionText: option });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      props.optionText
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
