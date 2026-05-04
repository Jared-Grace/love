import { text_prefix_without_inner } from "../../../love/public/src/text_prefix_without_inner.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
export function text_prefix_without_try(t, prefix) {
  let a = text_starts_with(t, prefix);
  if (not(a)) {
    return t;
  }
  let without = text_prefix_without_inner(t, prefix);
  return without;
}
