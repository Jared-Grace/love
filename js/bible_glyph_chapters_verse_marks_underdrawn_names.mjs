import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_verse_marks_underdrawn_names_walked } from "./bible_glyph_chapters_verse_marks_underdrawn_names_walked.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_glyph_chapters_verse_marks_underdrawn_names() {
  arguments_assert(arguments, 0);
  ("Each verse that draws a mark and leaves another word seated on that same mark in plain English letters, written as one word a record can hold: the chapter code, the verse number, the mark's name.");
  ("The writer of this ratchet's record wants nothing else. A record is a list of names and the count of how much was reached is not one of them, so the count is read off next door and left behind rather than being written into a file where it would go stale every time a chapter was added.");
  let told = await bible_glyph_chapters_verse_marks_underdrawn_names_walked();
  let offenders = property_get(told, "offenders");
  return offenders;
}
