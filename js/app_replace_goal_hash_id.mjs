import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_hash_short } from "./text_hash_short.mjs";
export function app_replace_goal_hash_id(goal) {
  "The word a link names this goal by: a short code made from where it starts and where it has to end.";
  "What the goal says rather than where it sits, because goals are put in between others when a set gains a harder case, and a link naming a place would then open a different exercise without a word. Made from what it says, a goal that is moved keeps its links, and a goal that is rewritten loses them - and a lost link lands on its rule set's list of goals, which is a place somebody can go on from.";
  "A code rather than the writing itself because the writing holds commas and equals signs, which are what an address uses to keep its words apart, and runs to nearly three hundred characters once made safe for one.";
  "The line between start and end is a new line because no goal holds one, so no two different goals can be joined into the same writing.";
  let start = property_get(goal, "start");
  let end = property_get(goal, "end");
  let joined = text_combine_multiple([start, "\n", end]);
  let id = text_hash_short(joined);
  return id;
}
