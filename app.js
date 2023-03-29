const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

console.log(path.join(__dirname, "service/"));

app.use(
  express.static(path.join(__dirname, "service"), {
    setHeaders: (res, path, stat) => {
      if (path.endsWith(".js")) {
        res.set("Content-Type", "application/javascript");
      }
    },
  })
);

const login = require("./login");
const authorization = require("./middleware/authorization");
const encoder = require("./service/encoder");

//app.use(express.json());
app.use(express.json());
app.use("/encode", authorization);

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/login.html"));
});
app.post("/login", login);
app.post("/encode", encoder);
//encoder("abcdefgh");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
