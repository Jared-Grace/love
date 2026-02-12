import { string_skip_end } from "../../../love/public/src/string_skip_end.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { text_ends_with } from "../../../love/public/src/text_ends_with.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
export function text_suffix_without(s, suffix) {
  let a = text_ends_with(s, suffix);
  if (not(a)) {
    error();
  }
  const missing = text_size(suffix);
  const without = string_skip_end(s, missing);
  return without;
}
