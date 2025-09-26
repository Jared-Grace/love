import { not } from "./not.mjs";
import { string_ends_with } from "./string_ends_with.mjs";
export function string_ends_with_not(item, suffix) {
  let a = string_ends_with(item, suffix);
  let ewn = not(a);
  return ewn;
}
