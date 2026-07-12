import { text_suffix_without } from "./text_suffix_without.mjs";
import { text_combine } from "./text_combine.mjs";
export function text_suffix_change(input, ending_old, ending_new) {
  let without = text_suffix_without(input, ending_old);
  let changed = text_combine(without, ending_new);
  return changed;
}
