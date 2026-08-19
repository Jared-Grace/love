import { equal } from "./equal.mjs";
export function song_image_chosen_map(state) {
  "the choices belonging to the cut now being looked at; the two cuts choose separately, because a tall side band and a wide half want different pictures even for the same couplet";
  if (equal(state.vertical, true)) {
    return state.chosen_vertical;
  }
  return state.chosen_horizontal;
}
