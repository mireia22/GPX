import { Map } from "leaflet";

class GpsDrawMap {
  map!: Map;
  location!: [number, number];
  construtor(location: [number, number] = [0, 0]) {
    this.location = location;
  }

  private initMap;
}
