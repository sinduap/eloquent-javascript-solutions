import { randomPick, buildGraph, findRoute } from './util';
import roads from '../data/roads';
import mailRoute from '../data/mail-route';

const graph = buildGraph(roads);

export function randomRobot(state) {
  const destination = randomPick(graph[state.location]);
  return { destination };
}

export function routeRobot(_state, memory) {
  if (memory.length == 0) memory = mailRoute;
  return { destination: memory.at(0), memory: memory.slice(1) };
}

export function goalRobot(state, memory) {
  if (memory.length == 0) {
    const parcel = state.parcels.at(0);
    const to = parcel.place == state.location ? parcel.address : parcel.place;
    memory = findRoute(graph, state.location, to);
  }
  return { destination: memory.at(0), memory: memory.slice(1) };
}

/***********************************************************************
Robot Efficiency
https://eloquentjavascript.net/07_robot.html#i-VbBsQJ1lp6

Can you write a robot that finishes the delivery task faster than
goalOrientedRobot? If you observe that robot’s behavior, what obviously
stupid things does it do? How could those be improved?

If you solved the previous exercise, you might want to use your
compareRobots function to verify whether you improved the robot.
***********************************************************************/
export function efficientRobot(state, memory) {
  if (memory.length == 0) {
    const sortedRoutes = state.parcels
      .reduce((destinations, { place, address }) => {
        if (state.location != place && !destinations.includes(place)) {
          destinations.push(place);
        }
        if (state.location == place && !destinations.includes(address)) {
          destinations.push(address);
        }
        return destinations;
      }, [])
      .map(destination => findRoute(graph, state.location, destination))
      .sort((a, b) => a.length - b.length);

    let shortest = sortedRoutes.at(0);
    const nextShortest = sortedRoutes.at(1);

    if (nextShortest && nextShortest.length == shortest.length) {
      state.parcels.forEach(({ place }) => {
        if (place == nextShortest.at(-1)) {
          shortest = nextShortest;
        }
      });
    }
    memory = shortest;
  }
  return { destination: memory.at(0), memory: memory.slice(1) };
}
