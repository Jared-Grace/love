import { equal } from "./equal.mjs";
import { app_replace_goal_hash_shortening_best } from "./app_replace_goal_hash_shortening_best.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { app_replace_goal_hash_shortening_render } from "./app_replace_goal_hash_shortening_render.mjs";
export function app_replace_goal_hash_shortenings(id) {
  "The word for one goal, shorter and shorter: first the whole word, then after each run of letters left out. A run is left out only where it comes at least twice between the same letter on its left and the same letter on its right, and an underscore stands where it was - bcccpbcccp becomes b_pb_p. Every underscore between the same two letters stands for the same run, so a_b means one thing wherever it is written, whatever comes before the a; a run that hid something else between those two letters is not left out.";
  "Each time, the run that saves the most letters is taken, the longer run where two save the same. The letters either side of a run left out stay, so two underscores never touch, and the wave between start and end is never left out.";
  "Turned down: leaving out a run that comes only once, which says only that something is missing; and keeping the first two symbols and the last of a run both sides begin or end with, as f(_) did, which this finds on its own as f_) while also finding the repeats within one side.";
  let letters = [...id];
  function lambda() {
    return false;
  }
  let hidden = letters.map(lambda);
  function pinned_is(letter) {
    let r = equal(letter, "~") || equal(letter, "_");
    return r;
  }
  let pinned = letters.map(pinned_is);
  let runs = new Map();
  let stages = [id];
  while (true) {
    let best = app_replace_goal_hash_shortening_best(
      letters,
      hidden,
      pinned,
      runs,
    );
    if (equal(best, null)) {
      return stages;
    }
    runs.set(best.key, best.run);
    for (let at of best.places) {
      pinned[subtract(at, 1)] = true;
      pinned[at + best.count] = true;
      for (let place = at; less_than(place, at + best.count); place++) {
        hidden[place] = true;
      }
    }
    let v = app_replace_goal_hash_shortening_render(letters, hidden);
    stages.push(v);
  }
}
