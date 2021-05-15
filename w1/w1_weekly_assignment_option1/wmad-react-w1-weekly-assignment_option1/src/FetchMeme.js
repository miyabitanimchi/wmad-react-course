import React from "react";
import "./FetchMeme.css";

class FetchMeme extends React.Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const url = "https://api.imgflip.com/get_memes";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        {this.state.loading ? <div>Loading...</div> : <div>meme...</div>}
      </div>
    );
  }
}
export default FetchMeme;
