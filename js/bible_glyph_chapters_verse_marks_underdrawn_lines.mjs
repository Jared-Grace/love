import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_verse_marks_underdrawn } from "./bible_glyph_chapters_verse_marks_underdrawn.mjs";
import { bible_glyph_chapters_marks_entries_lines } from "./bible_glyph_chapters_marks_entries_lines.mjs";
export async function bible_glyph_chapters_verse_marks_underdrawn_lines() {
  "Every verse that drew a picture and left another word for that same picture standing in plain English, laid out with everything a person needs to repair it: the verse as a reader sees it, and each original word the picture is seated on with where it stands.";
  "THE READING NEXT DOOR SAYS THERE IS A REPAIR AND NEVER WHAT IT IS. It hands back a chapter, a verse, a picture and two numbers, and the two numbers are enough to know that a word was left behind and nothing like enough to know which word - so a person holding that list opens the chapter, opens the interlinear, and lines the two up by hand, once per entry.";
  "NOT EVERY ENTRY IS A MISTAKE, AND THE POSITIONS ARE WHAT SHOW IT. Two seated words touching in the original can be one thing a reader sees once: the Greek emphatic double negative is two words and a single negation, drawn as a single mark on purpose. The count alone reports that as a word left behind. The count with the positions beside it does not.";
  arguments_assert(arguments, 0);
  let offenders = await bible_glyph_chapters_verse_marks_underdrawn();
  let text = await bible_glyph_chapters_marks_entries_lines(offenders);
  return text;
}
