import { binisaya_affix_kind_infix } from "./binisaya_affix_kind_infix.mjs";
import { binisaya_affix_kind_prefix } from "./binisaya_affix_kind_prefix.mjs";
import { binisaya_affix_kind_suffix } from "./binisaya_affix_kind_suffix.mjs";
export function binisaya_affix_kinds() {
  "The three names a piece of a word's construction can be called by here.";
  "The three are named together because a check on whether an explanation used the right one has to know the whole set - it looks for any of them in the prose and asks whether the one it found is the one the dictionary gives. A fourth name added to the shorthand later would have to be added here to be noticed at all.";
  let prefix = binisaya_affix_kind_prefix();
  let suffix = binisaya_affix_kind_suffix();
  let infix = binisaya_affix_kind_infix();
  let r = [prefix, suffix, infix];
  return r;
}
