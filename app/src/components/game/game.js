import matter from "matter-js";

let request;

export default class GameEngine {
  id;
  run;
  players;

  constructor({ id = "", controller }) {
    this.id = id;
    this.run = 0;
    this.players = {
      left: null,
      right: null
    };
    this.loop();
    console.log(`Creating game: ${this.id}`);
  }

  loop() {
    this.run += 1;
    request = requestAnimationFrame(this.loop, 1000 / 30);
  }

  setPlayer(side, player) {
    console.log(`Adding player to ${side} side`);
  }

  close() {
    console.log(`End game: ${this.id}`);
  }
}
