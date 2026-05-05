import { text_suffix_without_inner } from "../../../love/public/src/text_suffix_without_inner.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { text_ends_with } from "../../../love/public/src/text_ends_with.mjs";
import { error } from "../../../love/public/src/error.mjs";
export function text_suffix_without(t, suffix) {
  let a = text_ends_with(t, suffix);
  if (not(a)) {
    error();
  }
  const without = text_suffix_without_inner(t, suffix);
  return without;
}
