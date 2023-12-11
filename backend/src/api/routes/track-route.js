const express = require("express");
const { getAllTracks, postTrack } = require("../controllers/track-controller");

const trackRouter = express.Router();

trackRouter.get("/", getAllTracks);
trackRouter.post("/", postTrack);

module.exports = { trackRouter };
