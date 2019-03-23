import React, { Component } from "react";
import PropTypes from "prop-types";
import GameEngine from "./game";

export class component extends Component {
  socket;
  game;
  img;

  constructor(props) {
    console.log("trying to connect");
    super(props);
    //this.game = new GameEngine({});
    this.img = new Image();

    props.playerOneEnter();

    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  render() {
    return (
      <div>
        <canvas
          ref="canvas"
          id="image"
          onKeyDown={this.onKeyPressed}
          tabIndex="0"
        />
      </div>
    );
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
    this.img.onload = () => {
      this.refs.canvas.width = this.img.naturalWidth;
      this.refs.canvas.height = 300;
      ctx.drawImage(this.img, 0, 0);
      ctx.fillRect(0, 0, 100, 100);
    };
    this.img.src =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/130527/yellow-flower.jpg";
  }

  componentWillUnmount() {
    //this.socket.emit("disconnect", {});
    //this.socket.disconnect();
  }

  onKeyPressed() {
    console.log("Key Pressed");
    this.props.playerOneMoveLeft();
  }
}
