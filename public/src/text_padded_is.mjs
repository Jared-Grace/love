import { text_ends_with } from "../../../love/public/src/text_ends_with.mjs";
import { string_starts_with } from "../../../love/public/src/string_starts_with.mjs";
export function text_padded_is(s, padding) {
  let sw = string_starts_with(s, padding);
  let ew = text_ends_with(s, padding);
  let p = sw || ew;
  return p;
}
