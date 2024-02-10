const express = require("express");

const app = express();
const PORT = 3000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});

app.get("/", (req, res) => {
  res.send("<p>Hello!</p>");
});

app.get("/error", (req, res) => {
  process.exit(1);
});
