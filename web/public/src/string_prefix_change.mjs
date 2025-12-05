import { string_combine } from "../../../love/public/src/string_combine.mjs";
import { string_prefix_without } from "../../../love/public/src/string_prefix_without.mjs";
export function string_prefix_change(s, before, after) {
  let without = string_prefix_without(s, before);
  let together = string_combine(after, without);
  return together;
}
