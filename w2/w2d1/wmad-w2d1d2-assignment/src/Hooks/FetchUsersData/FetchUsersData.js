import React, { useState, useEffect } from "react";
import "./FetchUsersData.css";

const FetchUsersData = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };

  // only does an intial render
  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = (id) => {
    let newList = users.filter((user) => user.id !== id);
    setUsers(newList);
  };

  const editUser = () => {
    setEdit(true);
    console.log(edit);
  };

  return (
    <>
      <h3>User's List</h3>
      <button className="editBtn" onClick={editUser}>
        Edit
      </button>
      <div className="container">
        {!edit ? (
          users.map((user) => {
            const { id, name, username, email } = user;
            return (
              <ul key={id}>
                <li>ID: {id}</li>
                <li>Name: {name}</li>
                <li>Username: {username}</li>
                <li>E-mail: {email}</li>
                <button onClick={() => deleteUser(id)}>Delete</button>
              </ul>
            );
          })
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
      </div>
    </>
  );
};

export default FetchUsersData;
