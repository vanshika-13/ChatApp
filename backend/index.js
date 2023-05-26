const express = require("express");
//run http server
const cors = require("cors");
//call server from any other origin

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001); //port 3001