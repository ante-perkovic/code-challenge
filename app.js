const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/service"));
app.use(express.static(__dirname + "/views"));

const login = require("./login");
const authorization = require("./middleware/authorization");
const encoder = require("./service/encoder");

app.use(express.json());
app.use("/encode", authorization);

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "views/login.html"));
});
app.post("/login", login);
app.post("/encode", encoder);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
