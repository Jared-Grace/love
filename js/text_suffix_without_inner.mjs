import { string_skip_end } from "./string_skip_end.mjs";
import { text_size } from "./text_size.mjs";
export function text_suffix_without_inner(t, suffix) {
  let missing = text_size(suffix);
  let without = string_skip_end(t, missing);
  return without;
}
