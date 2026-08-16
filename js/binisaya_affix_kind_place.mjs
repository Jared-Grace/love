import { binisaya_affix_kind_prefix } from "./binisaya_affix_kind_prefix.mjs";
import { binisaya_affix_kind_suffix } from "./binisaya_affix_kind_suffix.mjs";
import { equal } from "./equal.mjs";
export function binisaya_affix_kind_place(kind) {
  "Where a piece of that kind sits, said as the tail of a sentence naming it.";
  "The place is said every time the name is, because a reader who has never met the word infix learns what it means from the words that follow it and is never left to look it up.";
  let prefix = binisaya_affix_kind_prefix();
  let before_is = equal(kind, prefix);
  if (before_is) {
    let before = " before the root";
    return before;
  }
  let suffix = binisaya_affix_kind_suffix();
  let after_is = equal(kind, suffix);
  if (after_is) {
    let after = " after the root";
    return after;
  }
  let r = " inside the root itself";
  return r;
}
