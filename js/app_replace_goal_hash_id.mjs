import { text_replace_each } from "./text_replace_each.mjs";
import { property_get } from "./property_get.mjs";
import { text_replace_space_to } from "./text_replace_space_to.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_url_escaped_removed } from "./text_url_escaped_removed.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_goal_hash_id(goal) {
  "The word a link names this goal by: a short spelling of where it starts and where it has to end, joined by a wave - the goal from ad to daab is ad~daab, and the goal from 1 = 1 to 1 + 1 = 1 1 is 1e1~1p1e11.";
  "What the goal says rather than where it sits, because goals are put in between others when a set gains a harder case, and a link naming a place would then open a different exercise without a word. Made from what it says, a goal that is moved keeps its links, and a goal that is rewritten loses them - and a lost link lands on its rule set's list of goals, which is a place somebody can go on from.";
  "Short and readable is all it has to be, plus different from every other goal of its own set - a link names the set first and looks only there, so two goals of different sets may share a word. The check on these words is what says no set has two alike. It does not have to spell the goal back exactly: a code of seven letters made from the whole goal was tried first, and the writing escaped for the address after it, and both were turned down - the code says nothing to a person, and the escapes fill a link with percent signs.";
  "So nothing in it may need escaping. The spaces that set the symbols of a row apart go; an equals sign becomes e and a plus p, the two that carry most of what an equation says; less and greater than become l and g, braces and brackets the round brackets an address allows, a semicolon a full stop and a double quote a single one - dropping those instead left goals of one set alike, a less-than beside a greater-than, an empty block beside one holding a semicolon; every other character an address would escape is left out. A dash was the other choice for the join and reads more easily, but dashes are symbols in some rule sets, where the join would stop being readable as a join.";
  function part(property) {
    let text = property_get(goal, property);
    let without = text_replace_space_to(text, "");
    let lower = text_lower_to(without);
    let looked_alike = text_replace_each(lower, {
      "=": "e",
      "+": "p",
      "<": "l",
      ">": "g",
      "{": "(",
      "}": ")",
      "[": "(",
      "]": ")",
      ";": ".",
      '"': "'",
    });
    let plain = text_url_escaped_removed(looked_alike);
    return plain;
  }
  let start = part("start");
  let end = part("end");
  let id = text_combine_multiple([start, "~", end]);
  return id;
}
