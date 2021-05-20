import React from "react";
import "./Users.css";
import List from "./List";

class Users extends React.Component {
  state = {
    userLists: [],
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

  render() {
    return (
      <section>
        {this.state.userLists.map((user) => (
          <List
            key={user.id}
            {...user}
            list={this.state.userLists}
            getNewList={this.getNewList}
          />
        ))}
      </section>
    );
  }
}

export default Users;
