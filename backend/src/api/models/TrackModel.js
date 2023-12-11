const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
  name: String,
  gpxFile: String,
  coordinates: [
    {
      lat: Number,
      lon: Number,
      ele: Number,
    },
  ],
});

const Track = mongoose.model("Track", trackSchema);

module.exports = Track;
