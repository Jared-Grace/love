import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { string_prefix_without } from "../../../love/public/src/string_prefix_without.mjs";
export function text_prefix_change(s, before, after) {
  let without = string_prefix_without(s, before);
  let together = text_combine(after, without);
  return together;
}
