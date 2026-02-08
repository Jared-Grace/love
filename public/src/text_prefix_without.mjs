import { not } from "../../../love/public/src/not.mjs";
import { text_skip } from "../../../love/public/src/text_skip.mjs";
import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
export function text_prefix_without(s, prefix) {
  let a = text_starts_with(s, prefix);
  if (not(a)) {
    error();
  }
  let skipped = text_size(prefix);
  let without = text_skip(s, skipped);
  return without;
}
