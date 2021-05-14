import React from "react";
import StudentList from "./StudentList";
import "./css/App.css";

class App extends React.Component {
  state = {
    text: "Loading Students...",
    disabled: true,
  };

  componentDidMount() {
    this.showNames = setInterval(() => {
      this.setState({
        text: (
          <StudentList
            list={[
              "Miyabi ",
              "Miyako ",
              "Miyao ",
              "Miyasako ",
              "Mia ",
              "Meowth ",
              "Meowwwww🐱 ",
            ]}
          />
        ),
        disabled: false,
      });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.showNames);
  }

  // なぜすぐ戻る？
  shuffleNames = () => {
    let nameArr = this.state.text.props.list;
    for (let i = nameArr.length; i > 0; i--) {
      let shuffledIndex = Math.floor(Math.random() * i);

      // Swap the places
      let temp = nameArr[i];
      nameArr[i] = nameArr[shuffledIndex];
      nameArr[shuffledIndex] = temp;
    }
    this.setState({
      text: nameArr,
    });
  };

  render() {
    return (
      <div className="show-names">
        <div>{this.state.text}</div>
        <button onClick={this.shuffleNames} disabled={this.state.disabled}>
          Shuffle Names
        </button>
        <h5>Assignment 2 in Option 2</h5>
      </div>
    );
  }
}

export default App;
