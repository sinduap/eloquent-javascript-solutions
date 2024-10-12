import { buildGraph, buildPlaces, randomPick } from './util';
import roads from '../data/roads';

const graph = buildGraph(roads);

export default class VillageState {
  constructor(location, parcels) {
    this.location = location;
    this.parcels = parcels;
  }

  move(destination) {
    const validMove = graph[this.location].includes(destination);
    if (!validMove) return this;

    const parcels = this.parcels
      .map(p => {
        if (p.place != this.location) return p;
        return { place: destination, address: p.address };
      })
      .filter(p => p.address != p.place);

    return new VillageState(destination, parcels);
  }

  static random(parcelCount = 5) {
    const parcels = [];
    const places = buildPlaces(roads);

    while (parcels.length < parcelCount) {
      const place = randomPick(places);
      let address;
      do {
        address = randomPick(places);
      } while (address == place);
      parcels.push({ place, address });
    }

    return new VillageState('Post Office', parcels);
  }
}
