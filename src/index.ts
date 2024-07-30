import express from "express";
import dotenv from "dotenv";
import nnnRouter from "nnn-router";
import logger from "./middlewares/logger.js";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  nnnRouter({
    routeDir: "/dist/routes",
  })
);

app.get("/", function (req, res) {
  return res.send({ message: "Hello world" });
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
