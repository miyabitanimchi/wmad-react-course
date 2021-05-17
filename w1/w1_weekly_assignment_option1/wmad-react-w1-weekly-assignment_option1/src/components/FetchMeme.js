import React from "react";
import Meme from "./Meme";
import "./FetchMeme.css";

class FetchMeme extends React.Component {
  state = {
    loading: true,
    imgSrc: "",
    imgName: "",
    boxCount: 0,
  };

  async componentDidMount() {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      console.log(data);
      this.setState({
        loading: false,
        imgSrc: data.data.memes[0].url,
        imgName: data.data.memes[0].name,
        boxCount: data.data.memes[0].box_count,
      });
    } catch (error) {
      console.log(`Oops! error: ${error}`);
    }
  }

  getRandomImg = async () => {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * 100);
      console.log(data.data.memes[randomIndex].box_count);

      this.setState({
        loading: false,
        imgSrc: data.data.memes[randomIndex].url,
        imgName: data.data.memes[randomIndex].name,
        boxCount: data.data.memes[randomIndex].box_count,
      });
    } catch (error) {
      console.log(`Oops! error: ${error}`);
    }
  };

  postImg = async () => {
    try {
      const response = await fetch("https://api.imgflip.com/caption_image");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(`Oops! error: ${error}`);
    }
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <Meme
            src={this.state.imgSrc}
            name={this.state.imgName}
            boxCount={this.state.boxCount}
          />
        )}

        <button onClick={this.getRandomImg}>Get image</button>
        <button onClick={this.postImg}>Create meme with this image</button>
      </div>
    );
  }
}
export default FetchMeme;
