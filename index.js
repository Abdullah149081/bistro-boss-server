const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 500;

app.use(cors());
app.use(express.json());





app.get("/", (req, res) => {
  console.log("Bistro boss server is running");
});

app.listen(port, () => {
  console.log(`Bistro boss server is running on ${port}`);
});
