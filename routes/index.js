const express = require("express");
const routes = express.Router();

routes.get("/", function (req, res, next) {
  res.status(200).json({ mssage: "route reachted for api" });
});

module.exports = routes;
