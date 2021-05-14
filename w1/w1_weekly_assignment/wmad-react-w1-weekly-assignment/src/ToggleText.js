import React from "react";
import "./css/ToggleText.css";
import { render } from "@testing-library/react";

export default class ToggleText extends React.Component {
  state = {
    left: true,
    text: "left",
  };

  toggleTextL = () => {
    this.setState({
      left: true,
    });
  };

  toggleTextR = () => {
    this.setState({
      left: false,
    });
  };

  render() {
    return (
      <div className="toggle-text">
        <h1>This is the {this.state.left ? "left" : "right"} text</h1>
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
