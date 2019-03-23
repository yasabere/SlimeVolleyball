import io from "socket.io-client";

export default () => {
  console.log("setting sockets up ");
  const socket = io();

  const onConnect = () => {
    console.log("connected");
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

  return store => next => action => {
    console.log("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    return result;
  };
};
