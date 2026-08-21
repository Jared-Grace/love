import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_last } from "./list_last.mjs";
import { text_split } from "./text_split.mjs";
export function app_replace_rule_from_row(row) {
  "Reads one of the replacing app's saved rules back out of the short form it is stored in - three words, in the order a rule record spells them: what it matches, what it puts there instead, and the line the author wrote it on.";
  "The two sides are lists of symbols and are stored as one word each, the symbols spaced apart, because that is already how the line the author wrote spells them and no symbol in any exercise has a space in it.";
  let left_text = list_first(row);
  let right_text = list_second(row);
  let original = list_last(row);
  let left = text_split(left_text, " ");
  let right = text_split(right_text, " ");
  let rule = {
    left,
    right,
    original,
  };
  return rule;
}
