import io from "socket.io-client";
import * as actions from "../components/game/actions";

export default () => {
  console.log("setting sockets up ");
  const socket = io();

  const onConnect = () => {
    console.log("connected");
    socket.emit("join", {});
  };

  const onDisconnect = () => {
    console.log("disconnected");
  };

  const onError = err => {
    console.log("connection error: ", err);
  };

  socket.on("connect", onConnect);
  socket.on("disconnect", onDisconnect);
  socket.on("connect_error", onError);
  socket.on("reconnect_error", onError);

  const actionsList = [...actions];

  console.log(actionsList);

  actionsList.map(element => {
    console.log(element);
  });
  console.log({ ...actions });

  return store => next => action => {
    if (action.socket) {
      console.log("dispatching", action);
      socket.emit(action.type);
    }
    let result = next(action);
    return result;
  };
};
