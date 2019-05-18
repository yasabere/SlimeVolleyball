import { Engine, Render, World, Bodies } from "matter-js";

let request;

export default class GameEngine {
  id;
  run;
  players;
  runner;
  engine;

  constructor({ id = "", controller, runner, canvas }) {
    this.engine = Engine.create();

    try {
      console.log(canvas);
      const render = Render.create({
        element: document.body,
        engine: this.engine,
        options: {
          width: 800,
          height: 600,
          pixelRatio: 1,
          background: "#fafafa",
          wireframeBackground: "#222",
          hasBounds: false,
          enabled: true,
          wireframes: true,
          showSleeping: true,
          showDebug: false,
          showBroadphase: false,
          showBounds: false,
          showVelocity: false,
          showCollisions: false,
          showSeparations: false,
          showAxes: false,
          showPositions: false,
          showAngleIndicator: false,
          showIds: false,
          showShadows: false,
          showVertexNumbers: false,
          showConvexHulls: false,
          showInternalEdges: false,
          showMousePosition: false
        }
      });

      Render.run(render);
    } catch (error) {
      console.log(error);
    }

    var boxA = Bodies.rectangle(400, 200, 80, 80);
    var boxB = Bodies.rectangle(450, 50, 80, 80);
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
    World.add(this.engine.world, [boxA, boxB, ground]);

    this.id = id;
    this.runner = runner;

    this.run = 0;
    this.players = {
      left: null,
      right: null
    };

    this.loop = this.loop.bind(this);

    this.loop();
    // run the engine
    console.log(`Creating game: ${this.id}`);
  }

  loop() {
    this.run += 1;
    Engine.update(this.engine, 1000 / 60);
    request = (this.runner || setImmediate)(this.loop, 1000 / 30);
  }

  setPlayer(side, player) {
    console.log(`Adding player to ${side} side`);
  }

  close() {
    console.log(`End game: ${this.id}`);
  }
}
