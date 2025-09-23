import { string_ends_with } from "./string_ends_with.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export function string_padded_is(s, padding) {
  let sw = string_starts_with(s, padding);
  let ew = string_ends_with(s, padding);
  let p = sw || ew;
  return p;
}
