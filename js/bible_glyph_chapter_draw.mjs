import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { bible_glyph_verse_draw } from "./bible_glyph_verse_draw.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_chapter_draw(chapter_code, traditions) {
  "$plain chapter_code";
  "$plain traditions";
  "the code names one chapter and the traditions are lists of glyph redrawings. Both are data to read and neither runs.";
  "One picture Bible chapter drawn as the plain text a reader sees, one verse per line with its number in front.";
  "This is the whole chain in one call - look the chapter up, parse its shorthand, lay any tradition over the vocabulary, draw every verse - and it exists so that reading a chapter costs one command. Before a page exists to show this Bible on, this IS the reader.";
  let chapter = bible_glyph_chapter(chapter_code);
  let lookup = bible_glyph_characters_lookup(traditions);
  let lines = [];
  for (let verse of chapter.verses) {
    let drawn = bible_glyph_verse_draw(verse.words, lookup);
    let line = verse.verse_number + " " + drawn;
    list_add(lines, line);
  }
  let text = lines.join("\n");
  return text;
}
