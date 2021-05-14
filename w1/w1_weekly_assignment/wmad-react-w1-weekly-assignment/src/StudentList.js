import React from "react";
import "./css/StudentList.css";

const StudentList = (props) => {
  return (
    <>
      <p>
        {props.list.length
          ? props.list.map((name) => {
              return name;
            })
          : ""}
      </p>
    </>
  );
};

export default StudentList;
