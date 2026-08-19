import { equal } from "./equal.mjs";
export function song_image_state_repair(state) {
  "fill in any field a stored state was saved before this app knew about, so a picker left open from an earlier build keeps its choices instead of throwing";
  if (equal(state.looking, undefined)) {
    state.looking = {};
  }
  if (equal(state.chosen_vertical, undefined)) {
    state.chosen_vertical = {};
  }
  if (equal(state.chosen_horizontal, undefined)) {
    state.chosen_horizontal = {};
  }
  if (equal(state.placement, undefined)) {
    state.placement = "behind";
  }
  if (equal(state.flip, undefined)) {
    state.flip = false;
  }
  return state;
}
