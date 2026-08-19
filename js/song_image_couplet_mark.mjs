import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
export function song_image_couplet_mark(state, n) {
  "how far couplet n has been decided, as a mark to put beside its number: nothing for undecided, a dot when one cut has a picture and the other does not, a tick when both do";
  let done = 0;
  if (not_equal(state.chosen_vertical[n], undefined)) {
    done = done + 1;
  }
  if (not_equal(state.chosen_horizontal[n], undefined)) {
    done = done + 1;
  }
  if (equal(done, 0)) {
    return "";
  }
  if (equal(done, 1)) {
    return "·";
  }
  return "✓";
}
