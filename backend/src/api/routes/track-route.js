const express = require("express");
const {
  getAllTracks,
  postTrack,
  deleteAllTracks,
} = require("../controllers/track-controller");

const trackRouter = express.Router();

trackRouter.get("/", getAllTracks);
trackRouter.post("/", postTrack);
trackRouter.delete("/", deleteAllTracks);

module.exports = { trackRouter };
