const Track = require("../models/TrackModel");

const getAllTracks = async (req, res, next) => {
  try {
    const tracks = await Track.find();
    return res.status(200).json(tracks);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const postTrack = async (req, res, next) => {
  try {
    const { name, gpxFile } = req.body;

    const newTrack = new Track({
      name,
      gpxFile,
    });
    const savedTrack = newTrack.save();

    return res.status(201).json({ message: "posted", savedTrack });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { postTrack, getAllTracks };
