import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { app_replace_goal_hash_run_places } from "./app_replace_goal_hash_run_places.mjs";
import { not_equal } from "./not_equal.mjs";
import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function app_replace_goal_hash_shortening_best(
  letters,
  hidden,
  pinned,
  runs,
) {
  "The one run worth leaving out next, or null when none is: it comes at least twice between the same two letters, those two letters do not already stand for another run, and it saves the most letters - the longer run where two save the same.";
  let best = null;
  for (let from = 1; less_than(from, subtract(letters.length, 1)); from++) {
    for (let count = 2; less_than(from + count, letters.length); count++) {
      let run = letters.slice(from, from + count).join("");
      if (run.includes("~")) {
        break;
      }
      let places = app_replace_goal_hash_run_places(
        letters,
        hidden,
        pinned,
        from,
        count,
      );
      if (less_than(places.length, 2)) {
        continue;
      }
      let key = letters[subtract(from, 1)] + letters[from + count];
      if (runs.has(key) && not_equal(runs.get(key), run)) {
        continue;
      }
      let right = subtract(count, 1);
      let saving = multiply(places.length, right);
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
  return best;
}
