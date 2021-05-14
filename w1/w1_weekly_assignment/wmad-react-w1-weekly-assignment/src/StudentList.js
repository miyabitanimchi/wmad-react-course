import React from "react";
import "./css/StudentList.css";

const StudentList = (props) => {
  return (
    <p>
      {props.list.map((name) => {
        return name;
      })}
    </p>
  );
};

// const showStudentName = (props) => {
//   const studentNameArr = props.list;
//   studentNameArr.map((name) => {
//     setInterval(() => {
//       document.getElementById("text").innerHTML = name;
//     }, 3000);
//   });
// };

export default StudentList;
