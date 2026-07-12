import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { text_prefix_without_inner } from "./text_prefix_without_inner.mjs";
export function text_prefix_without_try(t, prefix) {
  let n = text_starts_with_not(t, prefix);
  if (n) {
    return t;
  }
  let without = text_prefix_without_inner(t, prefix);
  return without;
}
