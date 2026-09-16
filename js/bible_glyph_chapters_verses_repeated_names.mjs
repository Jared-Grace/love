import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_verses_repeated_walked } from "./bible_glyph_chapters_verses_repeated_walked.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_chapters_verses_repeated_names() {
  arguments_assert(arguments, 0);
  ("Each verse of the picture Bible that repeats an earlier verse of its own chapter, written as one word a record can hold: the chapter code, the verse it repeats, and its own number.");
  ("The writer of this ratchet's record wants nothing else. A record is a list of names and the count of how much was reached is not one of them, so the count is read off next door and left behind rather than being written into a file where it would go stale every time a chapter was added.");
  let told = bible_glyph_chapters_verses_repeated_walked();
  let offenders = property_get(told, "offenders");
  return offenders;
}
