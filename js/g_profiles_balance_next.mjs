import { g_profiles_shares_distance } from "./g_profiles_shares_distance.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_pop } from "./list_pop.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { null_is } from "./null_is.mjs";
export function g_profiles_balance_next(cast, taken) {
  "Out of a dealt cast, which number to take next so that what has been taken lands as near the target spread as one more person can put it - or nothing at all when every one of them is taken.";
  "THE WHOLE DECISION AND NONE OF THE LOOKING UP, which is why it is here rather than inside the caller that reads the store. Everything this needs arrives as two plain lists, so it can be asked a question with an answer that was worked out by hand - and the hazard it exists to remove is precisely the kind that a caller reading real files cannot be shown to have avoided.";
  "TIES GO TO THE LOWER NUMBER. Several people usually mend the spread by exactly the same amount, and any rule that broke ties another way would make two callers holding the same store disagree about who to write - which is two arcs for one person and none for another.";
  "IT SCORES EVERY REMAINING PERSON RATHER THAN THE FIRST THAT HELPS. The person who mends the most is not usually near the front: the front is whoever the deal happened to hand out first, and taking the first improvement would follow pool order almost all of the way down.";
  let so_far = [];
  for (let index of taken) {
    let profile = cast[index];
    list_add(so_far, profile);
  }
  let count = list_size(cast);
  let best = null;
  let best_distance = 0;
  for (let index = 0; less_than(index, count); index++) {
    let done = list_includes(taken, index);
    if (done) {
      continue;
    }
    let profile = cast[index];
    list_add(so_far, profile);
    let distance = g_profiles_shares_distance(so_far);
    list_pop(so_far);
    let first = null_is(best);
    let closer = less_than(distance, best_distance);
    if (first || closer) {
      best = index;
      best_distance = distance;
    }
  }
  return best;
}
