import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function bible_glyph_word_parse_plain(parts) {
  arguments_assert(arguments, 1);
  let single = equal(parts.length, 1);
  let plain = single && equal(typeof parts[0], "string");
  return plain;
}
