const express = require("express");
const dotenv = require("dotenv");
const { connectToDB } = require("./src/config/db");
const { trackRouter } = require("./src/api/routes/track-route");
const { parseGpx } = require("./src/utils/parseGpx");

const app = express();
app.use(express.json());
dotenv.config();

app.use("/api/v1", trackRouter);
parseGpx();

app.use("*", (req, res, next) => {
  res.send("Route Not Found");
  console.log("Route Not Found");
});

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => {
  connectToDB();
  console.log(`App is listening to port ${PORT} 😉`);
});
