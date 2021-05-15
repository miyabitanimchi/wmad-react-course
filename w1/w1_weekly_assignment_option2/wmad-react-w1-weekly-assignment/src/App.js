import React from "react";
import StudentList from "./StudentList";
import "./css/App.css";

class App extends React.Component {
  state = {
    text: "Loading Students...",
    disabled: true,
    names: [],
  };

  componentDidMount() {
    this.showNames = setTimeout(() => {
      this.setState({
        names: [
          "Miyabi ",
          "Miyako ",
          "Miyao ",
          "Miyasako ",
          "Mia ",
          "Meowth ",
          "Meowwwww🐱 ",
        ],
        disabled: false,
        text: "",
      });
    }, 3000);
  }

  shuffleNames = () => {
    console.log("hello");
    let nameArr = this.state.names;
    for (let i = nameArr.length; i > 0; i--) {
      let shuffledIndex = Math.floor(Math.random() * i);

      // Swap the places
      let temp = nameArr[i];
      nameArr[i] = nameArr[shuffledIndex];
      nameArr[shuffledIndex] = temp;
    }
    this.setState({
      names: nameArr,
    });
  };

  render() {
    return (
      <div className="show-names">
        <div>{this.state.text}</div>

        <StudentList list={this.state.names} />
        <button onClick={this.shuffleNames} disabled={this.state.disabled}>
          Shuffle Names
        </button>
        <h5>Assignment 2 in Option 2</h5>
      </div>
    );
  }
}

export default App;
