import { string_skip_end } from "../../../love/public/src/string_skip_end.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
export function text_suffix_without_inner(suffix, t) {
  const missing = text_size(suffix);
  const without = string_skip_end(t, missing);
  return without;
}
