import React from "react";
import "./Users.css";
import List from "./List";

class Users extends React.Component {
  state = {
    userLists: [],
    editList: false,
  };

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    this.setState({
      userLists: data,
    });
  }

  getNewList = (newList) => {
    this.setState({
      userLists: newList,
    });
  };

  toggleEditStatus = () => {
    this.setState({
      editList: true,
    });
  };

  render() {
    return (
      <section>
        {!this.state.editList ? (
          this.state.userLists.map((user) => (
            <List
              key={user.id}
              {...user}
              list={this.state.userLists}
              getNewList={this.getNewList}
              toggleEditStatus={this.toggleEditStatus}
            />
          ))
        ) : (
          <form action="">
            <label htmlFor="ids">Select ID: </label>
            <select name="ids" id="ids">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <br />
            <label htmlFor="name">• Name: </label>
            <input type="text" /> <br />
            <label htmlFor="username">• Username: </label>
            <input type="text" /> <br />
            <label htmlFor="email">• E-mail: </label>
            <input type="text" />
            <br />
            <input type="submit" value="Save"></input>
          </form>
        )}
      </section>
    );
  }
}

export default Users;
