import { not } from "../../../love/public/src/not.mjs";
import { text_ends_with } from "../../../love/public/src/text_ends_with.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { string_slice } from "../../../love/public/src/string_slice.mjs";
import { string_size } from "../../../love/public/src/string_size.mjs";
export function string_suffix_without(s, suffix) {
  let a = text_ends_with(s, suffix);
  if (not(a)) {
    error();
  }
  const without = string_slice(s, 0, string_size(s) - string_size(suffix));
  return without;
}
