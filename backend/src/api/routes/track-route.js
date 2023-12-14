const express = require("express");
const {
  getAllTracks,
  postTrack,
  deleteAllTracks,
  getTrackById,
} = require("../controllers/track-controller");

const trackRouter = express.Router();

trackRouter.get("/", getAllTracks);
trackRouter.get("/tracks/:id", getTrackById);
trackRouter.post("/", postTrack);
trackRouter.delete("/", deleteAllTracks);

module.exports = { trackRouter };
