import express from "express";
import path from "path";
import md5 from "md5";
import serverRenderer from "./middleware/renderer";

const router = express.Router();

const apiRoutes = express.Router(),
  authRoutes = express.Router();

module.exports = app => {
  // router.get("/login", spotify.login);
  // router.get("/callback", spotify.callback);
  //router.use("^/$", serverRenderer);

  router.use(
    express.static(path.resolve(__dirname, "..", "build"), { maxAge: "0d" })
  );

  app.get("/", function(req, res) {
    var sessionId = md5("session" + Date.now() + Math.random());
    var user = md5("user" + Date.now() + Math.random());
    res.redirect("/" + sessionId + "/" + user);
  });

  router.use(
    "*",
    express.static(path.resolve(__dirname, "..", "build"), { maxAge: "0d" })
  );

  app.use(router);
};
