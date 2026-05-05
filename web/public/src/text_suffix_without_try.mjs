import { text_ends_with_not } from "../../../love/public/src/text_ends_with_not.mjs";
import { text_suffix_without_inner } from "../../../love/public/src/text_suffix_without_inner.mjs";
import { error } from "../../../love/public/src/error.mjs";
export function text_suffix_without_try(t, suffix) {
  let n = text_ends_with_not(t, suffix);
  if (n) {
    error();
  }
  const without = text_suffix_without_inner(t, suffix);
  return without;
}
