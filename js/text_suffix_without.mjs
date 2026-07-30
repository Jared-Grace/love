import { text_ends_with_not } from "./text_ends_with_not.mjs";
import { text_suffix_without_inner } from "./text_suffix_without_inner.mjs";
import { error } from "./error.mjs";
export function text_suffix_without(t, suffix) {
  let n = text_ends_with_not(t, suffix);
  if (n) {
    error_json({
      hint: "this removes a suffix from text that ends with it, and the text handed over does not end with that suffix - check the two below against each other",
      t,
      suffix,
    });
  }
  let without = text_suffix_without_inner(t, suffix);
  return without;
}
