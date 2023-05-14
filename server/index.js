const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 5002;

app.use(express.json());
const router = require("./route/route");

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
