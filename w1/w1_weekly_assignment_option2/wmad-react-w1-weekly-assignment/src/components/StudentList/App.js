import React from "react";
import StudentList from "./StudentList";
import "./App.css";

class App extends React.Component {
  state = {
    loding: true,
    disabled: true,
    names: [],
  };

  componentDidMount() {
    this.showNames = setTimeout(() => {
      this.setState({
        names: [
          "Eren ",
          "Mikasa ",
          "Armin ",
          "Levi ",
          "Hange ",
          "Sasha ",
          "Conny",
        ],
        disabled: false,
        loding: false,
      });
    }, 3000);
  }

  shuffleNames = () => {
    let nameArr = this.state.names;
    // console.log(nameArr);
    for (let i = nameArr.length - 1; i >= 0; --i) {
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
      <section className="show-name-container">
        <div className="main-wrap">
          <div>
            {this.state.loding ? (
              "Loading..."
            ) : (
              <StudentList list={this.state.names} />
            )}
          </div>

          {/* <StudentList list={this.state.names} /> */}
          <button onClick={this.shuffleNames} disabled={this.state.disabled}>
            Shuffle Names
          </button>
        </div>
        <h5>Assignment 2 in Option 2</h5>
      </section>
    );
  }
}

export default App;
