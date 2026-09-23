import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { multiply } from "./multiply.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
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
  function render() {
    let shown = "";
    function each(letter, place) {
      if (not(hidden[place])) {
        shown += letter;
      } else if (not(hidden[subtract(place, 1)])) {
        shown += "_";
      }
    }
    letters.forEach(each);
    return shown;
  }
  let stages = [id];
  while (true) {
    let best = null;
    for (let from = 1; less_than(from, subtract(letters.length, 1)); from++) {
      for (let count = 2; less_than(from + count, letters.length); count++) {
        let run = letters.slice(from, from + count).join("");
        if (run.includes("~")) {
          break;
        }
        let left = letters[subtract(from, 1)];
        let right = letters[from + count];
        let places = [];
        let at = 1;
        while (less_than(at + count, letters.length)) {
          let free = not(hidden[subtract(at, 1)]) && not(hidden[at + count]);
          for (let place = at; less_than(place, at + count); place++) {
            if (pinned[place] || hidden[place]) {
              free = false;
            }
          }
          let same =
            free &&
            equal(letters[subtract(at, 1)], left) &&
            equal(letters[at + count], right) &&
            equal(letters.slice(at, at + count).join(""), run);
          if (same) {
            places.push(at);
            at += count + 1;
          } else {
            at += 1;
          }
        }
        if (less_than(places.length, 2)) {
          continue;
        }
        let key = left + right;
        if (runs.has(key) && not_equal(runs.get(key), run)) {
          continue;
        }
        let right2 = subtract(count, 1);
        let saving = multiply(places.length, right2);
        if (
          equal(best, null) ||
          greater_than(saving, best.saving) ||
          (equal(saving, best.saving) && greater_than(count, best.count))
        ) {
          best = {
            saving,
            places,
            count,
            key,
            run,
          };
        }
      }
    }
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
    let v = render();
    stages.push(v);
  }
}
