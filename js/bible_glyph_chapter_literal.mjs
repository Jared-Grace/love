import { fn_name } from "./fn_name.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_drawn_lookup } from "./bible_glyph_roots_drawn_lookup.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { bible_glyph_chapter_literal_drawn } from "./bible_glyph_chapter_literal_drawn.mjs";
export async function bible_glyph_chapter_literal(
  chapter_code,
  testament_name,
) {
  "One chapter drawn in pictures and nothing else, word for word from the original, in the order the original puts its words.";
  "$plain chapter_code";
  "$plain testament_name";
  ("THE DRAWING ITSELF AND EVERY REASON FOR IT LIVE IN ",
    fn_name("bible_glyph_chapter_literal_drawn"),
    ", which the page runs too; this reads the chapter from the whole interlinear and the pictures from the testament's root table, the two things only the machine holds.");
  let roots = bible_glyph_roots_testament_table(testament_name);
  let drawn = bible_glyph_roots_drawn_lookup(roots);
  let verses = await bible_interlinear_chapter_words(chapter_code);
  let chapter = bible_glyph_chapter_literal_drawn(chapter_code, verses, drawn);
  return chapter;
}
