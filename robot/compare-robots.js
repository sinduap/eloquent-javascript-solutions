import roads from '../data/roads';
import { buildPlaces, randomPick } from './util';
import VillageState from './village-state';
import runRobot from './run-robot';

/***********************************************************************
Measuring a Robot
https://eloquentjavascript.net/07_robot.html#i-JrK0ADjuHH

It’s hard to objectively compare robots by just letting them solve a few
scenarios. Maybe one robot just happened to get easier tasks or the kind
of tasks that it is good at, whereas the other didn’t.

Write a function compareRobots that takes two robots (and their starting
memory). It should generate 100 tasks and let both of the robots solve
each of these tasks. When done, it should output the average number of
steps each robot took per task.

For the sake of fairness, make sure you give each task to both robots,
rather than generating different tasks per robot.
***********************************************************************/
export default function compareRobots(robots) {
  const TASK_COUNT = 100;
  const tasks = buildTasks(TASK_COUNT);
  const totals = tasks.map(task =>
    robots.map(robot => runRobot(new VillageState('Post Office', task), robot))
  );

  const averages = totals
    .reduce((acc, total) => acc.map((turn, i) => turn + total[i]))
    .map(total => total / TASK_COUNT);

  return averages;
}

function buildParcels(parcelCount) {
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
  return parcels;
}

function buildTasks(count) {
  const tasks = [];
  const PARCEL_COUNT = 5;
  for (let i = 0; i < count; i++) {
    tasks.push(buildParcels(PARCEL_COUNT));
  }
  return tasks;
}
