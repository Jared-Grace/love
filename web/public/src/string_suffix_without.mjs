import { string_ends_with } from "./string_ends_with.mjs";
import { error } from "./error.mjs";
export function string_suffix_without(s, suffix) {
  if (!string_ends_with(s, suffix)) {
    error();
  }
}
