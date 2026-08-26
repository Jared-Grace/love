import { arguments_assert } from "./arguments_assert.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_root_lookup } from "./bible_glyph_roots_root_lookup.mjs";
import { bible_glyph_chapter_draft_words } from "./bible_glyph_chapter_draft_words.mjs";
export async function bible_glyph_chapter_rows_filed_uncached(chapter_code) {
  "$plain chapter_code";
  "The interlinear words of one chapter together with the root table of its own testament, gathered in a single reading.";
  "IT IS THE UNCACHED HALF AND ALMOST NOBODY WANTS IT. Every reading that needs this asks for the same chapter over and over, once for each line it is printing, so the remembering twin is the one to call and this one exists to be the thing the twin remembers.";
  arguments_assert(arguments, 1);
  let testament_name = bible_chapter_testament_name(chapter_code);
  let roots = bible_glyph_roots_testament_table(testament_name);
  let filed = bible_glyph_roots_root_lookup(roots);
  let rows = await bible_glyph_chapter_draft_words(
    chapter_code,
    testament_name,
  );
  let r = {
    testament_name,
    roots,
    filed,
    rows,
  };
  return r;
}
