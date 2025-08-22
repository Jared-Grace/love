import { string_suffix_without } from "./string_suffix_without.mjs";
export function string_suffix_change(input, ending_old, ending_new) {
  let without = string_suffix_without(input, ending_old);
  let changed = without + ending_new;
  return changed;
}
