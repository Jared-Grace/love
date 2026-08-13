import { ebible_language_codes } from "./ebible_language_codes.mjs";
import { list_includes } from "./list_includes.mjs";
export function ebible_language_code_known_is(code) {
  "Whether a short code in a link names a language this repo actually has a bible in.";
  let known = ebible_language_codes();
  let named = list_includes(known, code);
  return named;
}
