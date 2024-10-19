/**
 * @param {object} graph The graph of places
 * @param {string} from The starting location
 * @param {string} to The destination
 * @return {string[]} Array representing a route from the starting location to the destination
 */
export function findRoute(graph, from, to) {
  const work = [{ at: from, route: [] }];

  for (let i = 0; i < work.length; i++) {
    const { at, route } = work[i];

    for (const place of graph[at]) {
      if (place == to) {
        return route.concat(to);
      }
      if (work.some(w => w.at != place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

export function buildGraph(roads) {
  const graph = {};

  function addEdge(from, to) {
    if (graph[from]?.includes(to)) return;

    if (graph[from]) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }
  }

  for (const road of roads) {
    const [from, to] = road.split('-');
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
}

export function buildPlaces(roads) {
  const places = [];

  function addPlaces(place) {
    if (places.includes(place)) return;
    places.push(place);
  }

  for (const road of roads) {
    const [from, to] = road.split('-');
    addPlaces(from);
    addPlaces(to);
  }

  return places;
}

export function randomPick(array) {
  return array.at(Math.floor(Math.random() * array.length));
}
