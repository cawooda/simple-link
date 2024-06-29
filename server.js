require("dotenv").config();
const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
const router = express.Router();

const routes = require("./routes");

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
