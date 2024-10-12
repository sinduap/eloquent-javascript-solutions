export default function runRobot(state, robot, memory = []) {
  for (let turn = 0; ; turn++) {
    const action = robot(state, memory);
    state = state.move(action.destination);
    memory = action.memory;
    if (state.parcels.length == 0) return turn;
  }
}
