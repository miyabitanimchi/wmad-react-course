import React from "react";
// import FetchMeme from "./FetchMeme";
import "./Meme.css";

const Meme = (props) => {
  const createInputs = () => {
    let inputs = [];
    for (let index = 1; index <= props.boxCount; index++) {
      inputs.push(<input type="text" name="text" key={index} />);
    }
    console.log(props.boxCount);
    console.log(inputs);
    return inputs;
  };
  return (
    <div>
      <img src={props.src} alt={props.name} />
      <form>{createInputs()}</form>
    </div>
  );
};

export default Meme;
