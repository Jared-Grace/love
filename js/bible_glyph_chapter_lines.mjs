import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { bible_glyph_verse_draw } from "./bible_glyph_verse_draw.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_chapter_lines(chapter_code, traditions) {
  "$plain chapter_code";
  "$plain traditions";
  "the code names one chapter and the traditions are lists of glyph redrawings. Both are data to read and neither runs.";
  "One picture Bible chapter drawn as its verses, one drawn line per verse with its number in front.";
  "The lines are kept apart rather than joined here because a page draws a verse as its own paragraph, and a page handed one long run of text with newline marks in it would have to split it up again to do that - splitting text that was joined a moment earlier, on a mark that a verse could one day contain. Whoever wants one run of text asks for the joining twin.";
  let chapter = bible_glyph_chapter(chapter_code);
  let lookup = bible_glyph_characters_lookup(traditions);
  let lines = [];
  for (let verse of chapter.verses) {
    let drawn = bible_glyph_verse_draw(verse.words, lookup);
    let line = verse.verse_number + " " + drawn;
    list_add(lines, line);
  }
  return lines;
}
