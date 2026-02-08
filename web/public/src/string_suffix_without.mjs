import { not } from "../../../love/public/src/not.mjs";
import { text_ends_with } from "../../../love/public/src/text_ends_with.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { text_slice } from "../../../love/public/src/text_slice.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
export function string_suffix_without(s, suffix) {
  let a = text_ends_with(s, suffix);
  if (not(a)) {
    error();
  }
  const without = text_slice(s, 0, text_size(s) - text_size(suffix));
  return without;
}
