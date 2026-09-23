import { text_split_space } from "./text_split_space.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_replace_each } from "./text_replace_each.mjs";
import { text_url_escaped_removed } from "./text_url_escaped_removed.mjs";
import { list_map } from "./list_map.mjs";
export function app_replace_goal_hash_tokens(text) {
  "The symbols of one row of a goal - the runs of characters its spaces set apart - each spelled in small letters with nothing an address would have to escape, ready to be cut short for a link.";
  "An equals sign becomes e and a plus p, the two that carry most of what an equation says; less and greater than become l and g, braces and brackets the round brackets an address allows, a semicolon a full stop and a double quote a single one - dropping those instead left goals of one set alike, a less-than beside a greater-than, an empty block beside one holding a semicolon. Every other character an address would escape is left out, so a link never fills with percent signs.";
  let split = text_split_space(text);
  let symbols = list_filter(split, text_empty_not_is);
  function safe(symbol) {
    let lower = text_lower_to(symbol);
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
  let tokens = list_map(symbols, safe);
  return tokens;
}
