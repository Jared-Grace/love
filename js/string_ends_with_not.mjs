import { not } from "../../../love/public/src/not.mjs";
import { string_ends_with } from "../../../love/public/src/string_ends_with.mjs";
export function string_ends_with_not(item, suffix) {
  let a = string_ends_with(item, suffix);
  let ewn = not(a);
  return ewn;
}
