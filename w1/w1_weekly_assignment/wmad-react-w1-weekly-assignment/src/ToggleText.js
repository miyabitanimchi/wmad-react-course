import React from "react";
import "./css/ToggleText.css";
import { render } from "@testing-library/react";

export default class ToggleText extends React.Component {
  state = {
    left: true,
    text: "This is the left text",
    lBtnIsPressed: "",
  };

  toggleTextL = () => {
    if (!this.state.left) {
      return;
    }
    this.setState({
      text: this.state.left
        ? "This is the left text"
        : "This is the right text",
      left: false,
      lBtnIsPressed: true,
    });
  };

  toggleTextR = () => {
    if (this.state.lBtnIsPressed === "") {
      this.setState({
        text: "This is the right text",
      });
      return;
    }
    if (this.state.left) {
      return;
    }
    this.setState({
      text: this.state.left
        ? "This is the left text"
        : "This is the right text",
      left: true,
    });
  };

  render() {
    return (
      <div className="toggle-text">
        <h1>{this.state.text}</h1>
        <div>
          <button onClick={this.toggleTextL}>Show Left</button>
          <button onClick={this.toggleTextR}>Show Right</button>
        </div>
        <h5>Assignment 1 in Option 2</h5>
      </div>
    );
  }
}

render();
