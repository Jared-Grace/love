import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
export function app_replace_goal_hash_run_places(
  letters,
  hidden,
  pinned,
  from,
  count,
) {
  "Every place, left to right and never overlapping, where the run of count letters starting at from comes again between the same letter on its left and the same letter on its right - and none of it already left out or kept.";
  let run = letters.slice(from, from + count).join("");
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
  return places;
}
