import { string_ends_with } from "./string_ends_with.mjs";
import { error } from "./error.mjs";
import { string_slice } from "./string_slice.mjs";
import { string_size } from "./string_size.mjs";
export function string_suffix_without(s, suffix) {
  if (!string_ends_with(s, suffix)) {
    error();
  }
  return string_slice(s, 0, string_size(s) - string_size(suffix))
}
