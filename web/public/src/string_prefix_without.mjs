import { string_starts_with } from "./string_starts_with.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
import { error } from "./error.mjs";
import { string_slice } from "./string_slice.mjs";
import { string_size } from "./string_size.mjs";
export function string_prefix_without(s, prefix) {
  if (!string_starts_with(s, prefix)) {
    error();
  }
  let skipped = string_size(prefix);
  let b = string_size(prefix);
  return string_slice(s, skipped, b);
}
