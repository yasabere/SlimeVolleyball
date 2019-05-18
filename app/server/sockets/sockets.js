import md5 from "md5";
import { GameEngine } from "../../src/components/game";

export const sockets = server => {
  console.log("creating socket server");

  const io = require("socket.io")(server);

  const gameRooms = {};

  io.on("connect", () => {
    console.log("Client has connected to the server!");
  });

  io.on("connection", client => {
    console.log(`Client ${client.id} has connected`);
    client.emit("connect");

    client.on("join", data => {
      var sessionId = md5("session" + Date.now() + Math.random());
      client.join(sessionId, () => {
        console.log("io.gameRooms", client.rooms);
        gameRooms[sessionId] = {
          game: {} //new GameEngine({ id: sessionId })
        };
      });
      console.log(sessionId);

      client.emit("join", {
        room: sessionId
      });
    });

    client.on("disconnect", data => {
      console.log(client.gameRooms);
      console.log(`Client ${client.id} has disconnected`);
    });
  });

  io.on("disconnect", client => {
    console.log(client.gameRooms);
    console.log(`Client ${client.id} has disconnected`);
  });

  return io;
};
