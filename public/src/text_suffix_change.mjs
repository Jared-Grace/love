import { text_suffix_without } from "../../../love/public/src/text_suffix_without.mjs";
export function text_suffix_change(input, ending_old, ending_new) {
  let without = text_suffix_without(input, ending_old);
  let changed = without + ending_new;
  return changed;
}
