import { fn_name } from "./fn_name.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { app_replace_goal_hash_ids_whole } from "./app_replace_goal_hash_ids_whole.mjs";
import { list_map } from "./list_map.mjs";
import { app_replace_goal_hash_shortenings } from "./app_replace_goal_hash_shortenings.mjs";
export function app_replace_goal_hash_ids(goals) {
  ("The words a link names each goal of one rule set by, in the order of the goals: each goal's word as ",
    fn_name("app_replace_goal_hash_ids_whole"),
    " spells it, shortened as far as ",
    fn_name("app_replace_goal_hash_shortenings"),
    " goes - the loop header a for goal repeats on both sides is f_)s~f_)l(a(i)).");
  ("Where two shortened words come out alike, the later goal's word takes back its last shortening, again and again, until every word differs; the whole words already differ, so this always ends.");
  ("The whole set is worked out at once because that is the only thing a word has to be told apart from: a link names the set first and looks only there. The price is that a goal's word can change when a goal alike to it is added to the set, and a link naming the old word then lands on the set's list of goals, which is a place somebody can go on from.");
  ("What the goal says rather than where it sits, because goals are put in between others when a set gains a harder case, and a link naming a place would then open a different exercise without a word. Tried before this and turned down: a code of seven letters made from the whole goal, which says nothing to a person; the writing escaped for the address, which fills a link with percent signs; and every symbol spelled out in full, which ran to eighty-four letters for a loop.");
  let whole = app_replace_goal_hash_ids_whole(goals);
  let stages = list_map(whole, app_replace_goal_hash_shortenings);
  function last_get(stages_one) {
    let difference = subtract(stages_one.length, 1);
    return difference;
  }
  let levels = list_map(stages, last_get);
  while (true) {
    function id_get(stages_one, index) {
      let r = stages_one[levels[index]];
      return r;
    }
    let ids = stages.map(id_get);
    let firsts = new Map();
    let stepped = false;
    function step(id, index) {
      let b = firsts.has(id);
      if (not(b)) {
        firsts.set(id, index);
        return;
      }
      let first = firsts.get(id);
      if (greater_than(levels[index], 0)) {
        levels[index] -= 1;
        stepped = true;
      } else if (greater_than(levels[first], 0)) {
        levels[first] -= 1;
        stepped = true;
      }
    }
    ids.forEach(step);
    if (not(stepped)) {
      return ids;
    }
  }
}
