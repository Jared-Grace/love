import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { function_read } from "./function_read.mjs";
import { bible_glyph_chapter_glyph_counts } from "./bible_glyph_chapter_glyph_counts.mjs";
import { function_prose_lines } from "./function_prose_lines.mjs";
import { bible_glyph_note_glyph_tokens } from "./bible_glyph_note_glyph_tokens.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_note_glyphs_undrawn() {
  arguments_assert(arguments, 0);
  ("Every picture a chapter note marks by name that its own chapter no longer draws, as the chapter code and the picture's name.");
  ("A MARKED NOTE IS A CLAIM THAT THE CHAPTER DRAWS THAT PICTURE, and a redraw is exactly what breaks one silently: the verses move to a new picture and the note keeps pointing at the old. This is the list of those, so a redraw shows which notes it left behind instead of leaving them for a reader to find.");
  ("A form counts only as itself. A note marking the verb form of a picture is answered by that form being drawn, and the bare picture drawn elsewhere in the chapter does not answer it, because the note named the form.");
  let undrawn = [];
  for (let chapter of bible_glyph_chapters()) {
    let chapter_code = chapter.chapter_code;
    let lower = text_lower_to(chapter_code);
    let name = text_combine("bible_glyph_chapter_", lower);
    let code = await function_read(name);
    let counts = bible_glyph_chapter_glyph_counts(chapter_code);
    for (let line of function_prose_lines(code)) {
      for (let glyph of bible_glyph_note_glyph_tokens(line)) {
        let drawn = property_exists(counts, glyph);
        if (drawn) {
          continue;
        }
        let one = {
          chapter_code,
          glyph,
        };
        list_add(undrawn, one);
      }
    }
  }
  return undrawn;
}
