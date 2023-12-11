const parseGpx = () => {
  fetch("/gpx/1085063.gpx")
    .then((res) => res.json())
    .then((data) => console.log("data", data))
    .catch((error) => console.error("Error:", error));
};

module.exports = { parseGpx };
