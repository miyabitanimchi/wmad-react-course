import React from "react";
import "./StudentList.css";

const StudentList = (props) => {
  return (
    <ol>
      {props.list.length
        ? props.list.map((name, index) => <li key={index}>{name}</li>)
        : ""}
    </ol>
  );
};

export default StudentList;
