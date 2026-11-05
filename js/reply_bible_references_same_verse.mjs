import { arguments_assert } from "./arguments_assert.mjs";
import { equal_by_property_multiple } from "./equal_by_property_multiple.mjs";
export function reply_bible_references_same_verse(a, b) {
  arguments_assert(arguments, 2);
  ("Whether two references name the same verse.");
  let same = equal_by_property_multiple(a, b, ["chapter_code", "verse_number"]);
  return same;
}
