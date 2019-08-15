const path = require("path");

const express = require("express");
var cors = require("cors");

const app = new express();

app.use(cors());

app.use("/", express.static("./dist"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./dist", "index.html"));
});

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
