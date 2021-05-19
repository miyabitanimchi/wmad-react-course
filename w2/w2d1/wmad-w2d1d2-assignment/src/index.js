import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import User from "./User/User";
import reportWebVitals from "./reportWebVitals";
import FetchUsersData from "./FetchUsersData/FetchUsersData";

ReactDOM.render(
  <React.StrictMode>
    <FetchUsersData />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
