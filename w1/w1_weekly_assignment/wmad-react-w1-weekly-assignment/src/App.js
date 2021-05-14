import React from "react";
import StudentList from "./StudentList";
import "./css/App.css";

class App extends React.Component {
  state = {
    text: "Loading Students...",
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
      });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.showNames);
  }

  render() {
    return (
      <div className="show-names">
        <p>{this.state.text}</p>
        <h5>Assignment 2 in Option 2</h5>
      </div>
    );
  }
}

export default App;
