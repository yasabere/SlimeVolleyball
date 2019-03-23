import express from "express";
import path from "path";
import morgan from "morgan";
import { sockets } from "./sockets";

const config = require("../config/main");
const router = require("./router");

const app = express();
const PORT = config.port;

router(app);

app.use(morgan("dev"));

const server = express()
  .use(app)
  .listen(PORT, error => {
    if (error) {
      return console.log("something bad happened", error);
    }

    console.log("listening on " + PORT + "...");
  });

const io = sockets(server);
