import React from "react";
import "./css/StudentList.css";

const StudentList = (props) => {
  console.log(props);
  return (
    <ol>
      {props.list.length
        ? props.list.map((name) => <li key={name}>{name}</li>)
        : ""}
    </ol>
  );
};

export default StudentList;
