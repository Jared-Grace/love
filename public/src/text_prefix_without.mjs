import { not } from "../../../love/public/src/not.mjs";
import { string_skip } from "../../../love/public/src/string_skip.mjs";
import { string_starts_with } from "../../../love/public/src/string_starts_with.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { string_size } from "../../../love/public/src/string_size.mjs";
export function text_prefix_without(s, prefix) {
  let a = string_starts_with(s, prefix);
  if (not(a)) {
    error();
  }
  let skipped = string_size(prefix);
  let without = string_skip(s, skipped);
  return without;
}
