import { property_get } from "./property_get.mjs";
import { text_replace_space_to } from "./text_replace_space_to.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_goal_hash_id(goal) {
  "The word a link names this goal by: where it starts and where it has to end, each with its spaces taken out and in small letters, joined by a wave - the goal from ad to daab is ad~daab.";
  "What the goal says rather than where it sits, because goals are put in between others when a set gains a harder case, and a link naming a place would then open a different exercise without a word. Made from what it says, a goal that is moved keeps its links, and a goal that is rewritten loses them - and a lost link lands on its rule set's list of goals, which is a place somebody can go on from.";
  "The writing itself rather than a code made from it, so whoever reads the link can see which exercise it opens. A code of seven letters was tried first and was short, but said nothing to a person.";
  "The spaces go because the symbols of a row are set apart by runs of them, and they would reach the address as a string of escapes. Taking them out can join two different rows into the same word - a b and ab - and the check on these words is what says whether any set has such a pair; none does.";
  "The wave stands between start and end because no goal holds one. A dash was the other choice and reads more easily, but dashes are symbols in some rule sets, where the join would stop being readable as a join.";
  "Commas and equals signs in a goal are left in here and escaped where the word is put into the address, so this word stays the goal's own writing.";
  function part(property) {
    let text = property_get(goal, property);
    let without = text_replace_space_to(text, "");
    let lower = text_lower_to(without);
    return lower;
  }
  let start = part("start");
  let end = part("end");
  let id = text_combine_multiple([start, "~", end]);
  return id;
}
