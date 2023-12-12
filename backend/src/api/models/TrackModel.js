const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  points: [
    {
      lat: {
        type: Number,
        required: true,
      },
      lon: {
        type: Number,
        required: true,
      },
    },
  ],
  totalDistance: {
    type: Number,
  },
  elevation: {
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    avg: {
      type: Number,
    },
  },
});

const Track = mongoose.model("track", trackSchema, "track");

module.exports = Track;
